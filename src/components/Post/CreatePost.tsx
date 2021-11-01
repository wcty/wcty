import Avatar from "components/Avatar";

import TextField from "components/Inputs/TextField";
import { Actions, Channels, Chip, Container, CreateVote, InputContent } from "./styles";
import  {ReactComponent  as SendIco} from "assets/icons/send.svg";
import Button from "components/Button";
import { EButtonTypes } from "components/Button/styles";

import {ReactComponent as VoteIcon} from "assets/icons/vote.svg";
import { useCreatePostMutation } from "generated";
import { useUser } from "common";
import { useParams } from "react-router-dom";
import { useState } from "react";
import IconButton from "components/IconButton";


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
              channels.map((channel, i) => <Chip key={i}>#{channel}</Chip>)
            }
          </Channels>
          <CreateVote>
            
            <VoteIcon/>
            <Button type={EButtonTypes.TEXT} label='Створити голосування'/>
          </CreateVote>
        </Actions>
      </Container>
  )
}

export default CreatePost;