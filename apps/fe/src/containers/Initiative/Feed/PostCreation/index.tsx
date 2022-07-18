import { Avatar, TextField, Button, IconButton } from "@ui";
import { InputContent } from "./styles";
import { Actions, Container } from "../../../../components/Post/styles";
import { ReactComponent as VoteIco} from "@assets/icons/vote.svg";
import { fixAvatar } from "common";
import { useState } from "react";
import { Trans } from '@lingui/macro'
import PostEditor from "../../../../components/PostEditor";
import { PostInitiativeInfoFragment } from "generated";
import { useUserData } from '@nhost/nextjs';

export default function CreatePost({
  initiative
}:{
  initiative?: PostInitiativeInfoFragment | null
}){
  
  const user = useUserData();
  const [editorOpen, setEditorOpen] = useState(false);

  return (
      <>
      {editorOpen && <PostEditor {...{initiative}} onClose={()=>setEditorOpen(false)}/>}

      <Container>
        <InputContent> 
            <Avatar s={'small'} picture={
              fixAvatar(user?.avatarUrl)
            }/>
            <TextField 
              onClick={()=>setEditorOpen(true)} 
              onImageClick={()=>setEditorOpen(true)} 
              imageDisabled
              height="1rem" 
              withImage 
              style={{caretColor: 'transparent'}}/>
            <IconButton 
              onClick={()=>setEditorOpen(true)} 
              style={{alignSelf: 'start', marginTop:'0.5rem'}} 
              icon="send" 
              s="small"/>
        </InputContent>
        <Actions>
          <div/>
          <Button t='text' s='small'><VoteIco/><Trans>Create poll</Trans></Button>
        </Actions>
      </Container>
      </>
  )
}
