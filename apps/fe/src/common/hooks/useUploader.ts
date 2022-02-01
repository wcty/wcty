import { ChangeEvent, useState, MouseEvent, MouseEventHandler } from 'react'
import { atoms, storage } from 'common'
import { v4 as uuidv4 } from 'uuid'
import { useRecoilValue } from 'recoil'
import { useInsertFileMutation, useUpdateFileMutation } from 'generated'

type Handler = MouseEventHandler<HTMLButtonElement>

export type UploaderOptions = {
  createRecord?:boolean, 
  multiple?:boolean
}

export type Files = {file:File,blob:string}[]
export type Result = {uuid?: string, url?:string, path?:string}
export function useUploader(initiativeID: string) {

  const user = useRecoilValue(atoms.user)
  const [ filesData, setFilesData ] = useState<Files | null>()
  const [ progress, setProgress ] = useState<number[]>([])
  const [ results, setResults ] = useState<Result[]>([])
  const [ insertFile ] = useInsertFileMutation()

  const onInputChange = async (e:ChangeEvent<HTMLInputElement>)=>{
    const files:Files = []

    for(let file of e.target.files||[]){
      files.push({
        file: file,
        blob: URL.createObjectURL(file)
      })
      console.log('Created blob:', file.name)
    }
    setFilesData(files)
  }
  
  const submitOne = async({
    fileData,
    createRecord,
    index
  }:{
    fileData:File,
    createRecord?:boolean,
    index: number
  })=>{
    const uuid = uuidv4()
    const extension = fileData.name.split(".").pop();
    const file_path = `/public/initiatives/${initiativeID}/${uuid}.${extension}`;
    const downloadable_url = `https://api.weee.city/storage/o${file_path}`;
    try{
      await storage.put(file_path, fileData, null, (d: any) => {
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
            file_path,
            downloadable_url,
            user_id: user?.id,
            initiative_id: initiativeID
          },
        },
      });
    }

    return {uuid, url: downloadable_url, path: file_path};
  }

  const submit = async (
    { createRecord=true, multiple }: UploaderOptions
  ) => {
    if ( !filesData?.length || !initiativeID ) { return; }
    if ( filesData.length>1 && !multiple ) { console.error("Multiple files not allowed"); return; }

    const resultsArray:Result[] = []
    for(let i = 0; i < filesData.length; i++){
      const fileData = filesData[i].file
      const res = await submitOne({
        fileData,
        createRecord,
        index: i
      })
      resultsArray.push(res)
      setResults([...results, res]);
    }
    return resultsArray;
  };

  const onInputChangeSubmit = async (
    e:ChangeEvent<HTMLInputElement>, 
    { createRecord=true, multiple }: UploaderOptions
  )=>{
    const files = e.target.files

    if ( !files?.length || !initiativeID ) { return; }
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


  return { submit, progress, results, filesData, onInputChange, onInputChangeSubmit };
}