import { ChangeEvent, useState, MouseEvent, MouseEventHandler } from 'react'
import { storage } from 'common'
import { v4 as uuidv4 } from 'uuid'
import { useRecoilValue } from 'recoil'
import { useInsertFileMutation, useUpdateFileMutation } from 'generated'
import App from 'App'


type Handler = MouseEventHandler<HTMLButtonElement>

export function useUploader(initiativeID: string) {

  const user = useRecoilValue(App.user)
  const [ uuid, setUuid ] = useState<string>();
  const [ fileData, setFileData ] = useState<File | null>()
  const [ progress, setProgress ] = useState(0)
  const [ result, setResult ] = useState<{url?:string, path?:string}>({url:undefined, path:undefined})
  const [ insertFile ] = useInsertFileMutation()
  const [ updateFile ] = useUpdateFileMutation()

  const onInputChange = (e:ChangeEvent<HTMLInputElement>)=>setFileData(e.target.files?.[0])

  const submit:Handler = async (e, createRecord=true) => {
    e?.preventDefault()
    if ( !fileData || !initiativeID ) { return; }

    const uuid_ = uuid || uuidv4()
    const extension = fileData.name.split(".").pop();
    const file_path = `/public/initiatives/${initiativeID}/${uuid_}.${extension}`;
    const downloadable_url = `https://api.weee.city/storage/o${file_path}`;

    await storage.put(file_path, fileData, null, (d: any) => {
      setProgress((d.loaded / d.total) * 100);
    });

    setResult({url:downloadable_url, path:file_path});

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
        setUuid(uuid_)
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
      setUuid(uuid_)
    }
  };

  const onInputChangeSubmit = async (e:ChangeEvent<HTMLInputElement>, createRecord=true)=>{
    const file = e.target.files?.[0]
    setFileData(file)
    if ( !file || !initiativeID ) { return; }
    const uuid_ = uuid || uuidv4()
    const extension = file.name.split(".").pop();
    const file_path = `/public/initiatives/${initiativeID}/${uuid}.${extension}`;
    const downloadable_url = `https://api.weee.city/storage/o${file_path}`;

    await storage.put(file_path, file, null, (d: any) => {
      setProgress((d.loaded / d.total) * 100);
    });

    setResult({url:downloadable_url, path:file_path});
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
        setUuid(uuid_)
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
      setUuid(uuid_)
    }
  }


  return {submit, progress, ...result, onInputChange, onInputChangeSubmit};
}