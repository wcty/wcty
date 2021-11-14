import { ReactComponent as ArrowDropDown } from 'assets/icons/arrow-drop-down.svg'
import { useI18n, useUser } from "common";
import { TasksDocument, useCheckTaskMutation, useTasksQuery } from "generated";
import { useState } from "react";
import { FinishedTasks, List, ProgressBar, Task } from "./styles";
import { Checkbox } from 'components';
import { useRouter } from 'next/router';

export default function TaskList() {
  const { id } = useRouter().query;
  const user = useUser()
  const {data} = useTasksQuery({variables:{id}, fetchPolicy:"cache-first", nextFetchPolicy:"cache-only"});
  const i18n = useI18n()
  const [open, setOpen] = useState(true);
  const [check] = useCheckTaskMutation({refetchQueries: [TasksDocument]});

  const onChange = (v:{status?:string|null, id:number})=>{
    if(v.status==='COMPLETED'){
      check({variables:{
        initiative_id:id, task_id: v.id, value:'PENDING'}})
    }else{
      check({variables:{
          initiative_id:id, task_id: v.id, value:'COMPLETED'}})             
    }
  }
  const tasksCompleted = data?.initiative_tasks.filter(t=>t.status==='COMPLETED').length ||0
  const tasksNumber = data?.initiative_tasks.length ||0

  return (<>
    <FinishedTasks tasks={tasksCompleted} total={tasksNumber}/>
    <ProgressBar percent={
      tasksNumber===0? 0:
      tasksCompleted/tasksNumber*100||0}/>
    <List {...{open}}>
      <span onClick={()=>setOpen(!open)}>
        <span>{i18n('list_of_tasks')}</span>
        <span>
          {open?i18n('hide'):i18n('show')}
          <ArrowDropDown/>
        </span>
      </span>
      <div>
        {
          data?.initiative_tasks?.map((v,i)=>
            <Task key={i}>
              <Checkbox 
                checked={v.status==='COMPLETED'} 
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