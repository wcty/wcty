import Avatar from "components/Avatar";
import { TextField } from "components";
import { Actions, Channels, Container, InputContent } from "./styles";
import { ReactComponent as VoteIco} from "assets/icons/vote.svg";
import Button from "components/Button";
import { useCreatePostMutation } from "generated";
import { fixAvatar, useI18n, useUser } from "common";
import { useState } from "react";
import IconButton from "components/IconButton";
import SectionTab from "components/SectionTab";
import { useRouter } from "next/router";

export interface ICreatePostProps{
  channels: string[]
}

function CreatePost({channels}:ICreatePostProps){
  const { id } = useRouter().query;
  const user = useUser();
  const [message, setMessage] = useState('')
  const [addPost] = useCreatePostMutation({variables:{initiative_id:id, user_id: user?.id, message}})
  const i18n = useI18n()
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
            {i18n('channels')}: {
              channels?.length>0?
              channels.map((channel, i) => <SectionTab key={i} label={`#${channel}`}/>):
              '#general'
            }
          </Channels>
            <Button  customType='text' size='small'><VoteIco/>{i18n('create_poll')}</Button>
        </Actions>
      </Container>
  )
}

export default CreatePost;
