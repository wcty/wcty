import Avatar from "components/Avatar";

import { TextField } from "components";
import { Actions, Channels, Container, CreateVote, InputContent } from "./styles";
import  {ReactComponent  as SendIco} from "assets/icons/send.svg";
import Button from "components/Button";


import {ReactComponent as VoteIcon} from "assets/icons/vote.svg";
import { useCreatePostMutation } from "generated";
import { useUser } from "common";
import { useParams } from "react-router-dom";
import { useState } from "react";
import IconButton from "components/IconButton";
import SectionTab from "components/SectionTab";


const channels = ['збір-коштів', 'Голосування','Розробкапроєкту'];


export interface ICreatePostProps{}

function CreatePost({}:ICreatePostProps){
  const {id} = useParams<{id:string}>();
  const user = useUser();
  const [message, setMessage] = useState('')
  const [addPost] = useCreatePostMutation({variables:{initiative_id:id, user_id: user?.id, message}})

  return (
      <Container>
        
        <InputContent> 
            <Avatar size={'small'}/>
            <TextField onChange={e => setMessage('message')}/>
            <IconButton icon="send" size="small" onClick={()=>addPost()}/>
            
        </InputContent>
        <Actions>
          <Channels>
            Канали: {
              channels.map((channel, i) => <SectionTab key={i}  label={`#${channel}`}/>)
            }
          </Channels>
          <CreateVote>
            
            
            <Button  customType='text' size='medium'>Створити голосування</Button>
          </CreateVote>
        </Actions>
      </Container>
  )
}

export default CreatePost;