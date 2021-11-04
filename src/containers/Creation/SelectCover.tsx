import Button from "components/Button";
import { BottomContainer, FileInput } from "./styles";
import { ReactComponent as Steps } from 'assets/icons/steps2.svg'
import { Initiative } from ".";
import { ChangeEvent, useEffect } from "react";
import { useInsertInitiativeMutation } from "generated";
import { userInfo } from "os";
import { useUser } from "common";
import { useHistory } from "react-router-dom";

export default function Creation({
  initiative,
  index, setIndex,
  onInputChangeSubmit
}:{
  initiative:Initiative,
  setInitiative: (initiative:Initiative) => void,
  index:number, setIndex:(index:number) => void,
  onInputChangeSubmit: (e: ChangeEvent<HTMLInputElement>, createRecord?: boolean) => void
}) {
  const history = useHistory()
  const user = useUser()
  const [insert, {error, data}] = useInsertInitiativeMutation()
  console.log(error, data)

  useEffect(()=>{
    const id = data?.insert_initiatives_one?.id
    if(id){
      console.log(id)
      history.push(`/initiative/${id}`)
    }

  },[data?.insert_initiatives_one?.id])

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