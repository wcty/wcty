import Button from "components/Button";
import { BottomContainer, Center, LocationCard } from "./styles";
import { useHistory } from "react-router-dom";
import { atoms, useAddress, useI18n, useUser } from "common";
import { ReactComponent as Steps } from 'assets/icons/steps.svg'
import { ReactComponent as Location } from 'assets/icons/popupLocation.svg'
import { ReactComponent as Pen } from 'assets/icons/pen.svg'
import { ReactComponent as PinNew } from 'assets/icons/pin-new.svg'
import { useEffect, useState } from "react";
import Map from 'components/Map'
import { useRecoilState } from "recoil";
import { TextField } from "components";
import { Initiative } from ".";

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
  const history = useHistory()
  const [viewport, setViewport] = useRecoilState(Map.viewport)
  const [focus, setFocus] = useRecoilState(atoms.focalPoint)
  const mbAddress = useAddress([viewport.longitude, viewport.latitude], true)
  const [editable, setEditable] = useState(false)
  const i18n = useI18n()

  useEffect(()=>{
    !initiative.address && setFocus(undefined)
  },[])

  return (
    <>
      {!(initiative.address && focus) &&<Center><PinNew/></Center>}
      <BottomContainer>
        <div>
          Створення ініціативи
          <Steps/>
        </div>
        {editable?
          <TextField 
            type='text'
            value={initiative.address}
            onChange={(e)=>setInitiative({...initiative, address: e.target.value})}
            placeholder={'Адреса ініціативи'}/>:
          <LocationCard onClick={()=>{
            setEditable(true);
            mbAddress && setInitiative({...initiative, address: mbAddress})
          }}>
            <span>
              <Location/>
              <span>{mbAddress}</span>
            </span>
            <span>
              Змінити
              <Pen/>
            </span>
          </LocationCard>}
        <div>
          <Button 
            label='Відміна' 
            customType='secondary' 
            onClick={()=>
              editable?
                setEditable(false):
              (initiative.address && focus)?
                (()=>{
                  setInitiative({...initiative, address: ''})
                  setFocus(undefined)
                })():  
                history.push('/')}/>
          <Button 
            label='Підтвердити адресу' 
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

            }}/>
        </div>
      </BottomContainer>
    </>
  )
}