import { useI18n, useLayout, useSize, useUser } from "common";
import { useInitiativeByPkQuery } from "generated";
import { useParams } from "react-router-dom";
import { ReactComponent as ArrowDropDown } from 'assets/icons/arrow-drop-down.svg'
import { config, useSpring } from 'react-spring'
import { useState } from "react";
import { InitiativeDescription, CollectedSum, Gauge, GaugeBlock, ProgressBar, FinishedTasks } from "./styles";
import ExpenseList from "./ExpenseList";
import TaskList from "./TaskList";

export default function Description() {
  const layout = useLayout()

  const {id} = useParams<{id:string}>();
  const user = useUser()
  const {data} = useInitiativeByPkQuery({variables:{id,user_id:user?.id}, fetchPolicy:"cache-only"});
  const i18n = useI18n()
  const [open, setOpen] = useState(true)

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

  const { ref, width } = useSize()

  return (

    <InitiativeDescription {...{open: layout==='desktop' || open, ref, layout }}>
      <span onClick={()=>setOpen(!open)}>
        <span>{i18n('description_of_initiative')}</span>
        <ArrowDropDown/>
      </span>
      <div>
        <GaugeBlock>
          <Gauge percent={x.to(x => x)} radius={(width && width>=480 && layout!=='desktop')? width*0.0125*6 : layout==='desktop'? 60 : 35 }/>
          <h4>{i18n('implemented_of_the_project')}</h4>
        </GaugeBlock>
        <>
          <CollectedSum sum={3120} total={12000}/>
          <ProgressBar percent={3120/12000*100}/>
          <ExpenseList/>
        </>
        <>
          <FinishedTasks tasks={3} total={8}/>
          <ProgressBar percent={3/8*100}/>
          <TaskList/>
        </>
      </div>
    </InitiativeDescription>

  )
}