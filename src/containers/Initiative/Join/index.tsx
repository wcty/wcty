import { useI18n, useUser } from 'common';
import Button from 'components/Button';
import { Checkbox, TextArea, TextField } from 'components';
import { InitiativeByPkDocument, useJoinMutation, useTasksQuery } from 'generated';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, DonationMenu, Form, TaskSelection } from './styles';

export default function Join() {
  const {id} = useParams<{id:string}>();
  const user = useUser()
  const i18n = useI18n();
  const {data:tasks} = useTasksQuery({variables:{id}, fetchPolicy:'cache-first', nextFetchPolicy: 'cache-only'})
  
  const [commitments, setCommitments] = useState({
    donation: {
      value: '',
      currency: 'UAH',
      checked: false
    },
    task: {
      description: '',
      ids: [] as number[],
      checked: false
    },
    project: {
      id: '',
      checked: false
    }
  });

  const {
    donation: { checked: donationChecked, value: donationValue, currency },
    task: { checked: taskChecked, description: taskDescription, ids: taskIds },
    project: { checked: projectChecked, id: projectId }
  } = commitments;

  const [join] = useJoinMutation({
    variables: {
      id,
      userId: user?.id,
      donations: 
        (
          donationChecked && 
          !isNaN(Number(donationValue)) &&
          Number(donationValue) > 0
        )? [{
          currency: currency,
          amount: Number(donationValue)
        }]:[],
      tasks:
        (
          taskChecked &&
          taskDescription.length > 0
        )? [{
          description: taskDescription,
          volunteers: {data:[{
            role: 'Initiator',
            initiative_id: id,
            user_id: user?.id
          }]}
        }]:[],
      volunteers:
        (
          taskChecked &&
          taskIds.length>0
        )? taskIds.map(v=>({
          task_id: v
        })):[],
    },
    refetchQueries: [InitiativeByPkDocument]
  });

  const disabled =  !(
      (
        donationChecked && 
        !isNaN(Number(donationValue)) && 
        Number(donationValue) > 0
      ) || 
      (
        taskChecked &&
        (
          taskDescription.length >= 10 ||
          taskIds.length>0
        )
      ) || 
      (
        projectChecked &&
        projectId
      )
    )
  
  return (
    <Container>
      <Form>
        <h3>{i18n('joinTheInitiative')}</h3>
        <div>
          <Checkbox 
            checked={commitments.donation.checked} 
            value='donation'
            onChange={()=>setCommitments({
              ...commitments, 
              donation:{
                ...commitments.donation,
                checked: !commitments.donation.checked
              }
            })}/>
          {i18n('i_am_ready_to_donate')}
        </div>
        <DonationMenu>
          <TextField 
            type='text'
            value={commitments.donation.value||''}
            onChange={(e)=>{
              setCommitments({
                ...commitments, 
                donation:{
                  ...commitments.donation,
                  checked: e.target.value!=='',
                  ...(
                    isNaN(Number(e.target.value)) &&
                    e.target.value!==''
                  )?{}:{value: e.target.value}
                }
              })
          }}
            placeholder={i18n('enter_sum')}/>
        </DonationMenu>
        <div>
          <Checkbox 
              checked={commitments.task.checked}
              value='task'
              onChange={()=>setCommitments({
                ...commitments, 
                task:{
                  ...commitments.task,
                  checked: !commitments.task.checked
                }
              })}/>
            {i18n('i_am_ready_to_volunteer')}
        </div>
        {tasks?.initiative_tasks && 
          <TaskSelection>
            <span>{i18n('choose_one_task')}</span>
            {tasks?.initiative_tasks.map((t,key)=>
              <span {...{key}}>
                <Checkbox 
                  checked={commitments.task.ids.includes(t.id)}
                  value={t.id}
                  onChange={()=>setCommitments({
                    ...commitments, 
                    task:{
                      ...commitments.task,
                      checked: (!commitments.task.ids.includes(t.id)) ||
                        commitments.task.description.length>0,
                      ids: commitments.task.ids.includes(t.id)?
                        commitments.task.ids.filter(v=>v!==t.id):
                        commitments.task.ids.concat(t.id)
                    }
                  })}/>
                {t.description}
              </span>
            )}
          </TaskSelection>}
        <TextArea
          cols={40} rows={3}
          value={commitments.task.description||''}
          onChange={(e)=>setCommitments({
            ...commitments, 
            task:{
              ...commitments.task,
              checked: e.target.value!=='' || commitments.task.ids.length>0,
              description: e.target.value
            }
          })}
          placeholder={i18n('suggest_relevant_task')}/>
        <div>
          <Button
            label={i18n('join')}
            disabled={ disabled }
            onClick={(e)=>{
              if(user){ 
                e.preventDefault();
                join() 
              }
            }}/>
        </div>

      </Form>
    </Container>
  );
}

export {default as LoginToJoin} from './LoginToJoin';