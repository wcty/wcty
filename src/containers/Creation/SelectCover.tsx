import Button from "components/Button";
import { BottomContainer } from "./styles";
import { useHistory } from "react-router-dom";
import { storage, useAddress, useI18n, useUser } from "common";
import { ReactComponent as Steps } from 'assets/icons/steps2.svg'
import Map from 'components/Map'
import { useRecoilState } from "recoil";
import { TextArea, TextField } from "components";
import { ChangeEvent, useState } from "react";

export type Initiative = {
  address: string,
  location: [number, number],
  name: string,
  problem: string,
  image: string
}

export default function Creation({
  initiative,
  setInitiative,
  index, setIndex
}:{
  initiative:Initiative,
  setInitiative: (initiative:Initiative) => void,
  index:number, setIndex:(index:number) => void
}) {
  
  async function upload() {
    if(file){
      try {
        await storage.put("/public/test.png", file);
        // await storage.put(`/public/${uuid}.${extension}`, file);
        // await storage.put(`/public/${file.name}`, file);
      } catch (error) {
        console.log({ error });
        return alert("Upload failed");
      }
      alert("Upload successful");
    }

    // You probably want to save the uploaded file to the database
    // You only need to save the `/public/test.png` part
  }

  const [file, setFile] = useState<File|null>(null);
  function addFile(e:ChangeEvent<HTMLInputElement>) {
    e.target.files?.[0] && setFile(e.target.files[0]);
  }

  return (
    <>
      <BottomContainer>
        <div>
          Створення ініціативи
          <Steps/>
        </div>
          <input type="file" onChange={addFile} />
          <Button 
            size='medium'
            customType='secondary' 
            onClick={upload}>Upload image</Button>
        <div>
          <Button 
            size='medium'
            customType='secondary' 
            onClick={()=>setIndex(index-1)}>Назад</Button>
          <Button 
            size='medium'
            customType='primary'
            disabled={initiative.name.length<10||initiative.problem.length<10}
            onClick={()=>{
                setIndex(index+1)
            }}>Створити ініціативу</Button>
        </div>
      </BottomContainer>
    </>
  )
}