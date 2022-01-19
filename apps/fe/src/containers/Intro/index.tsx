import { useUser } from "common";
import { useState } from "react";
import Welcome from "./Welcome";
import LocationAccess from "./LocationAccess";
import Explore from "./Explore";
import { CenterPanel } from "components/CenterPanel";
import { useRouter } from "next/router";
import { Wrapper } from "./styles";
import IconButton from "components/IconButton";
import { RightArrow } from "containers/Slides/styles";

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

export default function Intro() {
  const router = useRouter()
  const user = useUser()
  const [index, setIndex] = useState(0)
  const pages = [
    <Welcome {...{index, setIndex}}/>,
    <LocationAccess {...{index, setIndex}}/>,
    <Explore {...{index, setIndex}}/>
  ]

  return (
    <CenterPanel onClose={()=>router.back()}>
      <Wrapper>
        { pages[index] }
        <Circles count={pages.length} {...{index, setIndex}}/>
        <RightArrow 
          onClick={()=>
            (pages.length-1)===index?
            router.push('/'):
            setIndex(index+1)
          }>
          <IconButton 
            onClick={()=>{}} 
            icon='arrow-right'/>
        </RightArrow>
      </Wrapper>
    </CenterPanel>
  )
}

function Circles({count=3,index=0, setIndex=(val:number)=>{}}){
  const stroke = 1
  const radius = 5
  const padding = 5
  return <>
    <svg height={(radius+stroke)*2}>
      <g>
        {Array(count).fill(0).map((_,key)=>
          <circle {...{key}} 
            r={radius} 
            cx={radius+stroke+(key*(radius+stroke+padding)*2)} 
            cy={radius+stroke}
            onClick={()=>setIndex(key)}
            stroke='black' 
            fill={index===key?'black':'white'}/>
        )}
      </g>
    </svg>
  </>
}