import Button from "components/Button";
import { FileInput } from "./styles";
import { ReactComponent as Steps } from 'assets/icons/steps2.svg'
import { Initiative } from ".";
import { ChangeEvent, useEffect } from "react";
import { useInsertInitiativeMutation } from "generated";
import { userInfo } from "os";
import { useI18n, useUser } from "common";
import { useRouter } from "next/router";

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
  const router = useRouter()
  const user = useUser()
  const [insert, {error, data}] = useInsertInitiativeMutation()
  const i18n = useI18n()

  useEffect(()=>{
    const id = data?.insert_initiatives_one?.id
    if(id){
      console.log(id)
      router.push({pathname: `/initiative/[id]`, query: { id }})
    }

  },[data?.insert_initiatives_one?.id])

  return (
    <>
        <div>
          {i18n('creation_of_initiative')}
          <Steps/>
        </div>
        <FileInput 
          title={
            initiative.url?
            i18n('change_photo'):
            i18n('add_photo')} 
          src={
            initiative.url!==''?
            initiative.url+`#${initiative.timeUpdated}`:
            undefined} 
          onInputChange={(e)=>onInputChangeSubmit(e,false)}/>
        <div>
          <Button 
            customType='secondary' 
            onClick={()=>setIndex(index-1)}>
              {i18n('back')}
          </Button>
          <Button 
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
            }}>
              {i18n('create_initiative')}
            </Button>
        </div>
    </>
  )
}