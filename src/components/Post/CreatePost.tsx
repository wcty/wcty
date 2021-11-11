import Avatar from "components/Avatar";

import { TextField } from "components";
import { Actions, Channels, Container, CreateVote, InputContent } from "./styles";
import  {ReactComponent  as VoteIco} from "assets/icons/vote.svg";
import Button from "components/Button";



import { useCreatePostMutation } from "generated";
import { fixAvatar, useUser } from "common";
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
            <Avatar size={'small'} picture={
              fixAvatar(user?.avatar_url)
            }/>
            <TextField value={message} onChange={(e)=>setMessage(e.target.value)}/>
            <IconButton icon="send" size="small" onClick={()=>{addPost();setMessage('')}}/>
        </InputContent>
        <Actions>
          <Channels>
            Канали: {
              channels.map((channel, i) => <SectionTab key={i} label={`#${channel}`}/>)
            }
          </Channels>
          
            <Button  customType='text' size='small'><VoteIco/>Створити голосування</Button>
          
        </Actions>
      </Container>
  )
}

export default CreatePost;