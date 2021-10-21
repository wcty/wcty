import { useUser } from 'common';
import { useLastEntriesQuery } from 'generated';
import Anonimous from './Anonimous/';
import Authenticated from './Authenticated/';

export default function Slides(){
  const user = useUser()

  return user? <Authenticated/>: <Anonimous/>
};