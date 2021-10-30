import { describeArc, useI18n, useUser } from "common";
import { useInitiativeByPkQuery } from "generated";
import { useParams } from "react-router-dom";
import { InitiativeDescription } from "../styles";
import { ReactComponent as ArrowDropDown } from 'assets/icons/arrow-drop-down.svg'
import { animated, config, useSpring } from 'react-spring'
import { format } from 'd3-format'
import { useState } from "react";
import { Circle, CircleText } from "./style";

const formatMeters = format(',.2r')

export default function Description() {
  const {id} = useParams<{id:string}>();
  const user = useUser()
  const {data} = useInitiativeByPkQuery({variables:{id,user_id:user?.id}, fetchPolicy:"cache-only"});
  const i18n = useI18n()
  const [open, setOpen] = useState(false)

  const path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
  path.setAttribute('d', describeArc(43, 43, 35, 0, 359));
  const length = path.getTotalLength()

  const [flip, set] = useState(false)
  const { x } = useSpring({
    reset: true,
    reverse: flip,
    from: { x: 0 },
    x: 1,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!flip),
  })  

  return (

    <InitiativeDescription open={open}>
      <span onClick={()=>setOpen(!open)}>
        <span>{i18n('description_of_initiative')}</span>
        <ArrowDropDown/>
      </span>
      <div>
        <Circle>
          <svg width={86} height={86}>
            <circle cx={43} cy={43} r={35} fill='none' stroke='#D2BEA7' strokeWidth={8}/>
            <animated.circle 
              strokeDasharray={length} 
              strokeDashoffset={x.to(x => (1 - x) * length)} 
              cx={43} 
              cy={43} 
              r={35} 
              fill='none' 
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke='#000000' 
              strokeWidth={8}/>

          </svg>
          <CircleText>{x.to(x => (x*100).toFixed(0)+'%')}</CircleText>
        </Circle>
      </div>
    </InitiativeDescription>

  )
}