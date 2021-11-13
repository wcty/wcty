import { useUser } from "common";
import Unauthorized from "./Unauthorized";
import { useState } from "react";
import Map from 'components/Map'
import { useRecoilState } from "recoil";
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