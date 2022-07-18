import { Button } from "@ui";
import { FileInput } from "./styles";
import { ReactComponent as Steps } from '@assets/icons/steps2.svg'
import { Initiative } from ".";
import { ChangeEvent, useEffect, useState } from "react";
import { Task_Statuses_Enum, useInsertInitiativeMutation } from "generated";
import { UploaderOptions, Result } from "common";
import { useRouter } from "next/router";
import { Trans, t } from '@lingui/macro'
import { Loader } from "@ui";
import { useUserData } from '@nhost/nextjs';


export default function Creation({
  initiative,
  index, 
  setIndex,
  onInputChange,
  submit,
  blob
}:{
  initiative:Initiative,
  setInitiative: (initiative:Initiative) => void,
  index:number, 
  setIndex:(index:number) => void,
  onInputChange: ( e: ChangeEvent<HTMLInputElement> ) => void,
  submit: ( options:UploaderOptions ) => Promise<Result[]|undefined>,
  blob?: string
}) {
  const router = useRouter()
  const user = useUserData()
  const [insert, {error, data}] = useInsertInitiativeMutation()
  const [loading, setLoading] = useState(false)
  
  useEffect(()=>{
    if(error){
      setLoading(false)
    }
  },[error])

  useEffect(()=>{
    const id = data?.insert_initiatives_one?.id
    if(id){
      router.push({pathname: `/initiative/[id]`, query: { id }}, `/initiative/${id}`, { locale: router.locale })
    }
  },[data?.insert_initiatives_one?.id])

  return (
    <>
        <div>
          <Trans>Creation of initiative</Trans>
          <Steps/>
        </div>
        {loading && <Loader center/>}
        <FileInput 
          disabled={loading}
          title={
            blob?
            t`Change photo`:
            t`Add photo`} 
          src={blob} 
          $onInputChange={(e)=>onInputChange(e)}/>
        <div>
          <Button 
            disabled={loading}
            t='outlined' 
            onClick={()=>setIndex(index-1)}>
              <Trans>Back</Trans>
          </Button>
          <Button 
            disabled={(!blob)||(loading)}
            onClick={async ()=>{
              setLoading(true)
                const results = await submit({
                  createRecord: false,
                  props:{
                    initiative_id: initiative.id
                  }
                })
                await insert({variables:{
                  initiative:{
                    files:{
                      data: [{
                        downloadable_url: results?.[0].url,
                        file_path: results?.[0].path,
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
                            status: Task_Statuses_Enum.Completed,
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
                    image: results?.[0].url,
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
              <Trans>Create initiative</Trans>
            </Button>
        </div>
    </>
  )
}