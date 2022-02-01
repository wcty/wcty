import { ChangeEvent, useState, MouseEvent, MouseEventHandler } from 'react'
import { atoms, storage } from 'common'
import { v4 as uuidv4 } from 'uuid'
import { useRecoilValue } from 'recoil'
import { useInsertFileMutation, useUpdateFileMutation } from 'generated'

type Handler = MouseEventHandler<HTMLButtonElement>

export type UploaderOptions = {
  createRecord?:boolean, 
  multiple?:boolean,
  currentUuid?:string,
}

export function useUploader(initiativeID: string) {

  const user = useRecoilValue(atoms.user)
  const [ uuids, setUuids ] = useState<string[]>([]);
  const [ filesData, setFilesData ] = useState<FileList | null>()
  const [ progress, setProgress ] = useState<number[]>([])
  const [ results, setResults ] = useState<{uuid?: string, url?:string, path?:string}[]>([])
  const [ insertFile ] = useInsertFileMutation()
  const [ updateFile ] = useUpdateFileMutation()

  const onInputChange = (e:ChangeEvent<HTMLInputElement>)=>setFilesData(e.target.files)
  
  const submitOne = async({
    uuid,
    fileData,
    createRecord,
    index
  }:{
    uuid?:string,
    fileData:File,
    createRecord?:boolean,
    index: number
  })=>{
    const uuid_ = uuid || uuidv4()
    const extension = fileData.name.split(".").pop();
    const file_path = `/public/initiatives/${initiativeID}/${uuid_}.${extension}`;
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

    setResults([...results, {uuid: uuid_, url:downloadable_url, path:file_path}]);

    if(createRecord){
      if(!uuid){
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
        setUuids([...uuids, uuid_])
      }else{
        await updateFile({
          variables: {
            id: uuid,
            file: {
              file_path,
              downloadable_url,
              user_id: user?.id,
              initiative_id: initiativeID
            },
          },
        });
      }
    }else{
      setUuids([...uuids, uuid_])
    }
  }

  const submit = async (
    e:ChangeEvent<HTMLInputElement>, 
    { createRecord, multiple, currentUuid }: UploaderOptions
  ) => {
    e?.preventDefault()
    if ( !filesData?.length || !initiativeID ) { return; }
    if ( filesData.length>1 && !multiple ) { console.error("Multiple files not allowed"); return; }
    if ( filesData.length>1 && currentUuid ) { console.error("Replacment of multiple files not allowed"); return; }

    for(let i = 0; i < filesData.length; i++){
      const fileData = filesData[i]
      const uuid = currentUuid
      await submitOne({
        uuid,
        fileData,
        createRecord,
        index: i
      })
    }
  };

  const onInputChangeSubmit = async (
    e:ChangeEvent<HTMLInputElement>, 
    { createRecord, multiple, currentUuid }: UploaderOptions
  )=>{
    const files = e.target.files

    if ( !files?.length || !initiativeID ) { return; }
    if ( files.length>1 && !multiple ) { console.error("Multiple files not allowed"); return; }
    if ( files.length>1 && currentUuid ) { console.error("Replacment of multiple files not allowed"); return; }

    for(let i = 0; i < files.length; i++){
      const fileData = files[i]
      const uuid = currentUuid
      await submitOne({
        uuid,
        fileData,
        createRecord,
        index: i
      })
    }
    
  }


  return { submit, progress, results, onInputChange, onInputChangeSubmit };
}