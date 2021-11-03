import { useI18n, useLayout, useSize, useUser } from "common";
import { InitiativeByPkQuery, useInitiativeByPkQuery } from "generated";
import { useParams } from "react-router-dom";
import { ReactComponent as ArrowDropDown } from 'assets/icons/arrow-drop-down.svg'
import { config, useSpring } from 'react-spring'
import { useState } from "react";
import { InitiativeDescription, CollectedSum, Gauge, GaugeBlock, ProgressBar, FinishedTasks } from "./styles";
import ExpenseList from "./ExpenseList";
import TaskList from "./TaskList";
import getScore from "./getScore";



export default function Description() {
  const layout = useLayout()

  const {id} = useParams<{id:string}>();
  const user = useUser()
  const {data} = useInitiativeByPkQuery({variables:{id,user_id:user?.id}, fetchPolicy:"cache-only"});
  const i18n = useI18n()
  const [open, setOpen] = useState(true)

  const { score, collected, required } = getScore(data?.initiative)
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
        <span>{i18n('description_of_initiative')}</span>
        <ArrowDropDown/>
      </span>
      <div>
        <GaugeBlock>
          <Gauge percent={x.to(x => x)} radius={(width && width>=480 && layout!=='desktop')? width*0.0125*6 : layout==='desktop'? 60 : 35 }/>
          <h3>{i18n('implemented_of_the_project')}</h3>
        </GaugeBlock>
        <>
          <CollectedSum 
            sum={collected}
            total={required}/>
          <ProgressBar percent={
            required===0 && collected>0?
            50:collected/required||0}/>
          <ExpenseList/>
        </>
        <TaskList/>
      </div>
    </InitiativeDescription>

  )
}