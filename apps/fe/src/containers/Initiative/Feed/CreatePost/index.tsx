import { Avatar, Text, TextField, TextArea, Button, IconButton, SectionTab } from "@ui";
import { Channels, EditorContainer, EditorHeader, EditorWrapper, InputContent, Names } from "./styles";
import { Actions, Container } from "../Post/styles";
import { ReactComponent as VoteIco} from "@assets/icons/vote.svg";
import { useCreatePostMutation } from "generated";
import { fixAvatar, useUploader, useUser } from "common";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { Trans } from '@lingui/macro'
import { InitiativeProps } from "containers/Initiative";
import { IEmojiData } from "emoji-picker-react";


export default function CreatePost({initiative}:InitiativeProps){
  
  const user = useUser();
  const [editorOpen, setEditorOpen] = useState(false);

  return (
      <>
            {editorOpen && <PostEditor {...{initiative}} onClose={()=>setEditorOpen(false)}/>}

      <Container>
        <InputContent> 
            <Avatar customSize={'small'} picture={
              fixAvatar(user?.avatar_url)
            }/>
            <TextField onClick={()=>setEditorOpen(true)} height="1rem" withImage style={{caretColor: 'transparent'}}/>
            <IconButton style={{alignSelf: 'start', marginTop:'0.5rem'}} icon="send" size="small"/>
        </InputContent>
        <Actions>
          <div/>
          <Button customType='text' customSize='small'><VoteIco/><Trans>Create poll</Trans></Button>
        </Actions>
      </Container>
      </>
  )
}

function PostEditor({
  onClose = ()=>{}, 
  initiative
}: InitiativeProps & { onClose:()=>void }){
  const user = useUser();
  const { id } = useRouter().query;
  const [message, setMessage] = useState('')
  const [emojiOpen, setEmojiOpen] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement|any>();

  const onEmojiClick = (event: React.MouseEvent, emojiObject: IEmojiData) => {
    const cursor = inputRef?.current?.selectionStart;
    const text =
      message.slice(0, cursor) + emojiObject.emoji + message.slice(cursor);
      setMessage(text);
  };

  const {onInputChangeSubmit, results } = useUploader(initiative?.id)

  console.log('Upload results: ', results)
  const [addPost] = useCreatePostMutation({variables:{initiative_id:id, user_id: user?.id, message}})
  
  const submit = ()=>{ addPost(); setMessage(''); onClose() }

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
    <EditorWrapper>
      <EditorContainer>
        <EditorHeader>
          <div>
            <Avatar picture={
              fixAvatar(user?.avatar_url)
            }/>
            <Names>
              <Text semibold>
                {user?.display_name}
              </Text>
              <Text customColor='label'>
                {initiative?.name||''}
              </Text>
            </Names>
          </div>
          <IconButton customSize="small" position='absolute' top='2rem' right='2rem' customType="secondary" icon="close" onClick={onClose}/>
        </EditorHeader>
        <TextArea 
          onClick={()=>setEmojiOpen(false)} 
          {...{inputRef, onEmojiClick}} 
          {...{emojiOpen, setEmojiOpen}} 
          onImageSubmit={onInputChangeSubmit}
          withImage 
          withEmoji 
          value={message} 
          onChange={(e:any)=>setMessage(e.target.value)}/>
        <Button mt='1rem' pr="3rem" pl="3rem" customSize="large" onClick={submit} aria-disabled={message.length<2}>
          Publish
        </Button>
      </EditorContainer>
    </EditorWrapper>
  )
}