import { useUser } from 'common';
import Button from 'components/Button';
import { InitiativeByPkDocument, useInitiativeByPkLazyQuery, useInitiativeByPkQuery, useJoinMutation } from 'generated';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from './styles';

export default function Join() {
  const {id} = useParams<{id:string}>();
  const user = useUser()
  const [sum, setSum] = useState(0);
  const [join, {data,error}] = useJoinMutation({
    variables: {
      sum,
      id,
      userId: user?.id
    },
    refetchQueries: [InitiativeByPkDocument]
  });

  console.log(data,error, sum,
    id,
    user?.id
  )

  return (
    <Container>
      <h1>Join</h1>
      <div>
        <label id='sum'>Я готовий пожертвувати гроші</label>
        <input id='sum' value={sum} onChange={(e)=>setSum(Number(e.target.value))} type='number'/>
      </div>
      <button onClick={()=>{
        if(user){ 
          join() 
        }
      }}>Приєднатися</button>
    </Container>
  );
}

export {default as LoginToJoin} from './LoginToJoin';