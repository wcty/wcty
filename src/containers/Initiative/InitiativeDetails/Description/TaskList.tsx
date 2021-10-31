import { ReactComponent as ArrowDropDown } from 'assets/icons/arrow-drop-down.svg'
import { describeArc, useI18n, useUser } from "common";
import { useInitiativeByPkQuery } from "generated";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Expense, List, Task } from "./styles";
import {ReactComponent as LinkIcon} from 'assets/icons/link.svg';
import { Checkbox } from 'components/Checkbox';

export default function TaskList() {
  const {id} = useParams<{id:string}>();
  const user = useUser()
  const {data} = useInitiativeByPkQuery({variables:{id,user_id:user?.id}, fetchPolicy:"cache-only"});
  const i18n = useI18n()
  const [open, setOpen] = useState(false);
  const [tasks, setTasks] = useState([
    {
      name: 'Task name', 
      finished: true
    },
    {
      name: 'Another task', 
      finished: false
    }
  ])

  return (
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
          tasks.map((v,i)=>
            <Task key={i}>
              <Checkbox 
                checked={v.finished} 
                value={v.name}
                disabled={i==0}
                onChange={
                  ()=>{console.log('Change');setTasks(
                    [...tasks].map(d=>d.name===v.name? {...d, finished:!v.finished}: d)
                  )}
                }/>
              <div 
                onClick={
                  ()=>{console.log('Change');setTasks(
                    [...tasks].map(d=>d.name===v.name? {...d, finished:!v.finished}: d)
                  )}
                }>
                <span>{v.name}</span>
              </div>
            </Task>
          )
        }
      </div>
    </List>
  )
}