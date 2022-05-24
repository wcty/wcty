import {  useUser } from 'common';
import { Button, Checkbox, TextArea, TextField } from "@ui";
import { InitiativeByPkDocument, useJoinMutation, useTasksQuery } from 'generated';
import { useEffect, useState } from 'react';
import { Container, DonationMenu, Form, TaskSelection } from './styles';
import { useRouter } from 'next/router';
import { t, Trans } from '@lingui/macro'
import { position, layout } from 'styled-system'

export default function Join() {
  const { id } = useRouter().query;
  const user = useUser()
  const { data:tasks, error } = useTasksQuery({variables:{id}, fetchPolicy:'cache-first', nextFetchPolicy: 'cache-only' })
  
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
            user_id: user?.id
          }]}
        }]:[],
      volunteers:
        (
          taskChecked &&
          taskIds.length>0
        )? taskIds.map(v=>({
          task_id: v,
          role: 'Volunteer',
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
        <h3><Trans>Join the initiative</Trans></h3>
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
          <Trans>I am ready to donate</Trans>
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
            placeholder={t`Enter sum`}/>
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
            <Trans>I am ready to volunteer</Trans>
        </div>
        {tasks?.initiative_tasks && 
          <TaskSelection>
            <span><Trans>Choose one of the tasks you can perform, or suggest your own.</Trans></span>
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
          withCancel
          value={commitments.task.description||''}
          onChange={(e)=>setCommitments({
            ...commitments, 
            task:{
              ...commitments.task,
              checked: e.target.value!=='' || commitments.task.ids.length>0,
              description: e.target.value
            }
          })}
          placeholder={t`Suggest a relevant task for the initiative that you can perform`}/>
        <div>
          <Button
            customSize='medium'
            customType='primary'
            disabled={ disabled }
            onClick={(e)=>{
              if(user){ 
                e.preventDefault();
                join() 
              }
            }}><Trans>Join</Trans></Button>
        </div>

      </Form>
    </Container>
  );
}

export {default as LoginToJoin} from './LoginToJoin';