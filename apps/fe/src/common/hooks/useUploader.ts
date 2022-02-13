import { ChangeEvent, useState, MouseEvent, MouseEventHandler } from 'react'
import { atoms, storage } from 'common'
import { v4 as uuidv4 } from 'uuid'
import { useRecoilValue } from 'recoil'
import { Files_Insert_Input, useInsertFileMutation, useUpdateFileMutation } from 'generated'

type Handler = MouseEventHandler<HTMLButtonElement>

export type UploaderOptions = {
  createRecord?:boolean, 
  props?: Files_Insert_Input,
  file_path?: string,
  file_name?: string,
  multiple?:boolean,
  keepSelected?:boolean,
}

export type Files = {file:File,blob:string}[]
export type Result = {uuid?: string, url?:string, path?:string}
export function useUploader() {

  const user = useRecoilValue(atoms.user)
  const [ filesData, setFilesData ] = useState<Files | null>()
  const [ progress, setProgress ] = useState<number[]>([])
  const [ results, setResults ] = useState<Result[]>([])
  const [ insertFile ] = useInsertFileMutation()

  const reset = () => {
    setFilesData(null)
    setProgress([])
    setResults([])
  }

  const onInputChange = async (
    e:ChangeEvent<HTMLInputElement>,
    options?:UploaderOptions)=>{
    const files:Files = []

    for(let file of e.target.files||[]){
      files.push({
        file: file,
        blob: URL.createObjectURL(file)
      })
      // console.log('Created blob:', file.name)
    }
    if(options?.keepSelected){
      setFilesData([...(filesData||[]), ...files])
    }else{
      setFilesData(files)
    }
  }
  
  const submitOne = async({
    fileData,
    createRecord,
    index,
    file_path,
    file_name,
    props
  }:{
    fileData:File,
    createRecord?:boolean,
    props?: Files_Insert_Input,
    file_path?: string,
    file_name?: string,
    index: number
  })=>{
    const uuid = uuidv4()
    const extension = fileData.name.split(".").pop();
    const file_path_string = 
      file_path && file_name?
      `${file_path}/${file_name}`:
      file_path?
      `${file_path}/${uuid}.${extension}`:
      file_name?
      `/public/initiatives/${props?.initiative_id}/${file_name}`:
      `/public/initiatives/${props?.initiative_id}/${uuid}.${extension}`;

    const downloadable_url = `https://api.weee.city/storage/o${file_path_string}`;
    
    try{
      await storage.put(file_path_string, fileData, null, (d: any) => {
        const updatedProgress = [...progress]
        updatedProgress[index] = (d.loaded / d.total) * 100
        setProgress(updatedProgress);
      });
    }catch(e){
      console.log('Error uploading file', e)
    }

    if(createRecord){
      await insertFile({
        variables: {
          file: {
            file_path: file_path_string,
            downloadable_url,
            user_id: user?.id,
            ...props
          },
        },
      });
    }

    return {uuid, url: downloadable_url, path: file_path_string};
  }

  const submit = async (
    options?: UploaderOptions
  ) => {
    const { createRecord=true, props, multiple, file_name, file_path } = options || {}
    if ( !filesData?.length || !options?.props?.initiative_id ) { console.error('No files or initiative'); return; }
    if ( filesData.length>1 && !multiple ) { console.error("Multiple files not allowed"); return; }

    const resultsArray:Result[] = []
    for(let i = 0; i < filesData.length; i++){
      const fileData = filesData[i].file
      const res = await submitOne({
        fileData,
        createRecord,
        props,
        file_path,
        file_name,
        index: i
      })
      resultsArray.push(res)
      setResults([...results, res]);
    }
    return resultsArray;
  };

  const onInputChangeSubmit = async (
    e:ChangeEvent<HTMLInputElement>, 
    options?: UploaderOptions
  )=>{
    const { createRecord=true, multiple, props } = options || {}
    const files = e.target.files

    if ( !files?.length || !props?.initiative_id ) { return; }
    if ( files.length>1 && !multiple ) { console.error("Multiple files not allowed"); return; }

    for(let i = 0; i < files.length; i++){
      const fileData = files[i]
      const res = await submitOne({
        fileData,
        createRecord,
        index: i
      })
      setResults([...results, res]);
    }
    
  }


  return { submit, progress, reset, results, filesData, onInputChange, onInputChangeSubmit };
}