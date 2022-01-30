import { Center, LocationCard } from "./styles";
import { atoms, useAddress,  useUser } from "common";
import { ReactComponent as Steps } from '@assets/icons/steps.svg'
import { ReactComponent as Location } from '@assets/icons/popupLocation.svg'
import { ReactComponent as Pen } from '@assets/icons/pen.svg'
import { ReactComponent as PinNew } from '@assets/icons/pin-new.svg'
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { TextField, Button } from "@ui";
import { Initiative } from ".";
import { useRouter } from "next/router";
import { Trans, t } from '@lingui/macro'

export default function Creation({
  initiative,
  setInitiative,
  index, setIndex
}:{
  initiative:Initiative,
  setInitiative: (initiative:Initiative) => void,
  index:number, setIndex:(index:number) => void
}) {
  
  const user = useUser()
  const router = useRouter()
  const [viewport, setViewport] = useRecoilState(atoms.viewport)
  const [focus, setFocus] = useRecoilState(atoms.focalPoint)
  const mbAddress = useAddress([viewport.longitude, viewport.latitude], true)
  const [editable, setEditable] = useState(false)

  useEffect(()=>{
    !initiative.address && setFocus(undefined)
  },[])

  return (
    <>
      {!(initiative.address && focus) && <Center><PinNew/></Center>}
        <div>
          <Trans>Creation of initiative</Trans>
          <Steps/>
        </div>
        {editable?
          <TextField 
            type='text'
            value={initiative.address}
            onChange={(e)=>setInitiative({...initiative, address: e.target.value})}
            placeholder={t`Address of initiative`}/>:
          <LocationCard onClick={()=>{
            setEditable(true);
            mbAddress && setInitiative({...initiative, address: mbAddress})
          }}>
            <span>
              <Location/>
              <span>{mbAddress}</span>
            </span>
            <span>
              <Trans>Change</Trans>
              <Pen/>
            </span>
          </LocationCard>}
        <div>
          <Button 
            customType='outlined' 
            onClick={()=>
              editable?
                setEditable(false):
              (initiative.address && focus)?
                (()=>{
                  setInitiative({...initiative, address: ''})
                  setFocus(undefined)
                })():  
                router.push('/')
            }><Trans>Cancel</Trans></Button>
          <Button 
            onClick={()=>{
                if(!(initiative.address&&initiative.location)){
                  setInitiative({...initiative, 
                    address: mbAddress!,
                    location: [viewport.longitude, viewport.latitude]
                  })
                }
                if(!focus){
                  setFocus([viewport.longitude, viewport.latitude])
                }

                setViewport({...viewport, latitude: viewport.latitude+0.0001, viewportChangeOptions:{offset:[0,-120]}})
                setIndex(index+1)
            }}><Trans>Approve address</Trans></Button>
        </div>
    </>
  )
}