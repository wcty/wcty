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
        <FileInput title={initiative.url?'Змінити фото':'Додати фото'} src={initiative.url!==''?initiative.url+`#${initiative.timeUpdated}`:undefined} onInputChange={(e)=>onInputChangeSubmit(e,false)}/>
        <div>
          <Button 
            label='Назад' 
            customType='secondary' 
            onClick={()=>setIndex(index-1)}/>
          <Button 
            label='Створити ініціативу' 
            disabled={!(initiative.url&&initiative.path)}
            onClick={()=>{
                insert({variables:{
                  initiative:{
                    files:{
                      data: [{
                        downloadable_url: initiative.url,
                        file_path: initiative.path,
                        user_id: user?.id,
                      }]
                    },
                    name:initiative.name,
                    members: {
                      data:[{
                        user_id: user?.id,
                        tasks:{
                          data:[{
                            description: 'Create initiative',
                            status: 'COMPLETED',
                            volunteers:{
                              data:[{
                                user_id: user?.id
                              }]
                            }
                          }]
                        }
                      }]
                    },
                    geom: {
                      type: 'Point',
                      coordinates: initiative.location
                    },
                    address: initiative.address,
                    id: initiative.id,
                    image: initiative.url,
                    infos:{
                      data:[{
                        user_id: user?.id,
                        approved_at: new Date(),
                        problem: initiative.problem,
                      }]
                    },
                  }
                }})
            }}/>
        </div>
      </BottomContainer>
    </>
  )
}