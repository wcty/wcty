import { ReactComponent as ArrowDropDown } from '@assets/icons/arrow-drop-down.svg'
import {  useUser } from "common";
import { TasksDocument, Task_Statuses_Enum, useCheckTaskMutation, useTasksQuery } from "generated";
import { useState } from "react";
import { FinishedTasks, List, ProgressBar, Task } from "./styles";
import { Checkbox } from '@ui';
import { useRouter } from 'next/router';
import { Trans } from '@lingui/macro'

export default function TaskList() {
  const { id } = useRouter().query;
  const user = useUser()
  const {data} = useTasksQuery({variables:{id}, fetchPolicy:"cache-first", nextFetchPolicy:"cache-only"});
  const [open, setOpen] = useState(true);
  const [check] = useCheckTaskMutation({refetchQueries: [TasksDocument]});

  const onChange = (v:{status?:string|null, id:number})=>{
    if(v.status===Task_Statuses_Enum.Completed){
      check({variables:{
        initiative_id:id, task_id: v.id, value:Task_Statuses_Enum.Pending}})
    }else{
      check({variables:{
          initiative_id:id, task_id: v.id, value:Task_Statuses_Enum.Completed}})             
    }
  }
  const tasksCompleted = data?.initiative_tasks.filter(t=>t.status===Task_Statuses_Enum.Completed).length ||0
  const tasksNumber = data?.initiative_tasks.length ||0

  return (<>
    <FinishedTasks tasks={tasksCompleted} total={tasksNumber}/>
    <ProgressBar percent={
      tasksNumber===0? 0:
      tasksCompleted/tasksNumber*100||0}/>
    <List {...{open}}>
      <span onClick={()=>setOpen(!open)}>
        <span><Trans>List of tasks</Trans></span>
        <span>
          {open? <Trans>Hide</Trans>:<Trans>Show</Trans>}
          <ArrowDropDown/>
        </span>
      </span>
      <div>
        {
          data?.initiative_tasks?.map((v,i)=>
            <Task key={i}>
              <Checkbox 
                checked={v.status===Task_Statuses_Enum.Completed} 
                value={v.description}
                disabled={!user}
                onChange={()=>onChange(v) }/>
              <div 
                onClick={()=>onChange(v) }>
                <span>{v.description}</span>
              </div>
            </Task>
          )
        }
      </div>
    </List>
  </>)
}