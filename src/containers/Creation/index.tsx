import Button from "components/Button";
import { BottomContainer, Center, LocationCard } from "./styles";
import { ReactComponent as Cross } from 'assets/icons/cross.svg'
import { useHistory } from "react-router-dom";
import { useAddress, useI18n, useUploader, useUser } from "common";
import Unauthorized from "./Unauthorized";
import { ReactComponent as Steps } from 'assets/icons/steps.svg'
import { ReactComponent as Location } from 'assets/icons/popupLocation.svg'
import { ReactComponent as Pen } from 'assets/icons/pen.svg'
import { ReactComponent as PinNew } from 'assets/icons/pin-new.svg'
import { useContext, useEffect, useState } from "react";
import Map from 'components/Map'
import { useRecoilState } from "recoil";
import { TextField } from "components";
import SelectAddress from "./SelectAddress";
import SelectName from "./SelectName";
import SelectCover from "./SelectCover";
import { v4 as uuidv4 } from 'uuid'

export type Initiative = {
  address: string,
  location: [number, number],
  name: string,
  problem: string,
  image: string,
  id: string,
  url: string,
  path: string,
  timeUpdated: number,
}

export default function Creation() {
  const user = useUser()
  const [viewport] = useRecoilState(Map.viewport)

  const [initiative, setInitiative] = useState<Initiative>({
    address: '',
    location: [viewport.longitude, viewport.latitude],
    name: '',
    problem: '',
    image: '',
    id: uuidv4(),
    url: '',
    path: '',
    timeUpdated: Date.now()
  })

  const {onInputChangeSubmit, url, path} = useUploader(initiative.id)
  const [index, setIndex] = useState(0)
  
  useEffect(()=>{
    if(url&&path){
      setInitiative({...initiative, url, path, timeUpdated: Date.now()})
    }
  },[url,path])

  return (user?
    (
      index===0?
        <SelectAddress {...{initiative, setInitiative, index, setIndex}}/>:
      index===1?
        <SelectName {...{initiative, setInitiative, index, setIndex}}/>:
      index===2?
        <SelectCover {...{initiative, setInitiative, index, setIndex, onInputChangeSubmit}}/>:
      null
    ):
    <Unauthorized/>
  )
}