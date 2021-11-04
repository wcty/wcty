import Button from "components/Button";
import { BottomContainer, Center, LocationCard } from "./styles";
import { ReactComponent as Cross } from 'assets/icons/cross.svg'
import { useHistory } from "react-router-dom";
import { useAddress, useI18n, useUser } from "common";
import Unauthorized from "./Unauthorized";
import { ReactComponent as Steps } from 'assets/icons/steps.svg'
import { ReactComponent as Location } from 'assets/icons/popupLocation.svg'
import { ReactComponent as Pen } from 'assets/icons/pen.svg'
import { ReactComponent as PinNew } from 'assets/icons/pin-new.svg'
import { useContext, useState } from "react";
import Map from 'components/Map'
import { useRecoilState } from "recoil";
import { TextField } from "components";
import SelectAddress from "./SelectAddress";
import SelectName from "./SelectName";
import SelectCover from "./SelectCover";

export type Initiative = {
  address: string,
  location: [number, number],
  name: string,
  problem: string,
  image: string
}

export default function Creation() {
  const user = useUser()
  const [viewport] = useRecoilState(Map.viewport)
  const [initiative, setInitiative] = useState<Initiative>({
    address: '',
    location: [viewport.longitude, viewport.latitude],
    name: '',
    problem: '',
    image: ''
  })
  const [index, setIndex] = useState(0)
  
  return (user?
    (
      index===0?
        <SelectAddress {...{initiative, setInitiative, index, setIndex}}/>:
      index===1?
        <SelectName {...{initiative, setInitiative, index, setIndex}}/>:
      index===2?
        <SelectCover {...{initiative, setInitiative, index, setIndex}}/>:
      null
    ):
    <Unauthorized/>
  )
}