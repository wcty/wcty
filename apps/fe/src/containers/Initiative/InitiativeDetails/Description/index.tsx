import {  useLayout, useSize, useUser } from "common";
import { InitiativeByPkQuery, InitiativePublicByPkQuery } from "generated";
import { ReactComponent as ArrowDropDown } from '@assets/icons/arrow-drop-down.svg'
import { config, useSpring } from 'react-spring'
import { useState } from "react";
import { InitiativeDescription, CollectedSum, Gauge, GaugeBlock, ProgressBar, FinishedTasks } from "./styles";
import ExpenseList from "./ExpenseList";
import TaskList from "./TaskList";
import getScore from "./getScore";
import { useRouter } from "next/router";
import { InitiativeProps } from "containers/Initiative";
import { Trans } from '@lingui/macro'


export default function Description({initiative}:InitiativeProps) {
  const layout = useLayout()

  const { id } = useRouter().query;
  const user = useUser()
  const [open, setOpen] = useState(true)

  const { score, collected, required } = getScore(initiative)
  const { x } = useSpring({
    from: { x: 0 },
    x: score,
    delay: 200,
    config: config.molasses,
  })  

  const { ref, width } = useSize()

  return (

    <InitiativeDescription {...{open: layout==='desktop' || open, ref, layout }}>
      <span onClick={()=>setOpen(!open)}>
        <span><Trans>Description of initiative</Trans></span>
        <ArrowDropDown/>
      </span>
      <div>
        <GaugeBlock>
          <Gauge percent={x.to(x => x)} radius={(width && width>=480 && layout!=='desktop')? width*0.0125*6 : layout==='desktop'? 60 : 35 }/>
          <h3 style={{textAlign:'center'}}><Trans>Implemented of the project</Trans></h3>
        </GaugeBlock>
        <>
          <CollectedSum 
            sum={collected}
            total={required}/>
          <ProgressBar percent={
            required===0 && collected>0?
            50:collected/required||0}/>
          <ExpenseList {...{initiative}}/>
        </>
        <TaskList/>
      </div>
    </InitiativeDescription>

  )
}