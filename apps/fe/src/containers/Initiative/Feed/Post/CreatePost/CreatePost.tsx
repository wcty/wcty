import { Avatar, TextField, TextArea, Button, IconButton, SectionTab } from "@ui";
import { Channels, InputContent } from "./styles";
import { Actions, Container } from "../styles";
import { ReactComponent as VoteIco} from "@assets/icons/vote.svg";
import { useCreatePostMutation } from "generated";
import { fixAvatar, useUser } from "common";
import { KeyboardEventHandler, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Trans } from '@lingui/macro'

export interface ICreatePostProps{
  channels?: string[]
}

function CreatePost({channels}:ICreatePostProps){
  
  const { id } = useRouter().query;
  const user = useUser();
  const [message, setMessage] = useState('')
  const [addPost] = useCreatePostMutation({variables:{initiative_id:id, user_id: user?.id, message}})
  
  const submit = ()=>{ addPost(); setMessage('') }

  useEffect(()=>{
    window.onkeydown = (e)=>{
      if(e.key === 'Enter' && (e.ctrlKey || e.metaKey) && message?.length >= 2){
        console.log('fired')
        submit()
      }
    }
    return ()=>{
      window.onkeydown = null
    }
  },[message])

  return (
      <Container>
        <InputContent> 
            <Avatar customSize={'small'} picture={
              fixAvatar(user?.avatar_url)
            }/>
            <TextArea extendable rows={1} height="1rem" withImage value={message} onChange={(e:any)=>setMessage(e.target.value)}/>
            <IconButton style={{alignSelf: 'start', marginTop:'0.5rem'}} aria-disabled={message.length<2} icon="send" size="small" onClick={submit}/>
        </InputContent>
        <Actions>
          <div>{channels && <Channels>
            <Trans>Channels</Trans>: {
              channels?.length>0?
              channels.map((channel, i) => <SectionTab key={i} label={`#${channel}`}/>):
              '#general'
            }
          </Channels>}</div>
            <Button customType='text' customSize='small'><VoteIco/><Trans>Create poll</Trans></Button>
        </Actions>
      </Container>
  )
}

export default CreatePost;
