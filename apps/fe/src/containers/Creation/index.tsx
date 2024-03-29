import { atoms, useUploader, useUser } from "common";
import Unauthorized from "./Unauthorized";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import SelectAddress from "./SelectAddress";
import SelectName from "./SelectName";
import SelectCover from "./SelectCover";
import { v4 as uuidv4 } from 'uuid'
import { CreationContainer } from "./styles";

export type Initiative = {
  address: string,
  location: [number, number],
  name: string,
  problem: string,
  image: string,
  id: string,
  url: string,
  blob?: string,
  path: string,
  timeUpdated: number,
}

export default function Creation() {
  const user = useUser()
  const [viewport] = useRecoilState(atoms.viewport)

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

  const { onInputChange, submit, results, filesData } = useUploader()
  const { url = undefined, path = undefined } = results?.[0] || {}

  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (url && path) {
      setInitiative({ ...initiative, url, path, timeUpdated: Date.now() })
    }
  }, [url, path])

  return (user ?
    <CreationContainer>{
      index === 0 ?
        <SelectAddress {...{ initiative, setInitiative, index, setIndex }} /> :
        index === 1 ?
          <SelectName {...{ initiative, setInitiative, index, setIndex }} /> :
          index === 2 ?
            <SelectCover {...{ initiative, setInitiative, index, setIndex, onInputChange, submit, blob: filesData?.[0]?.blob }} /> :
            null
    }</CreationContainer> :
    <Unauthorized />
  )
}