import { Avatar, TextField, Button, IconButton } from "@ui";
import { InputContent } from "./styles";
import { Actions, Container } from "../../../../components/Post/styles";
import { ReactComponent as VoteIco} from "@assets/icons/vote.svg";
import { fixAvatar, useUser } from "common";
import { useState } from "react";
import { Trans } from '@lingui/macro'
import PostEditor from "../../../../components/PostEditor";
import { PostInitiativeInfoFragment } from "generated";

export default function CreatePost({
  initiative
}:{
  initiative?: PostInitiativeInfoFragment | null
}){
  
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
              customSize="small"/>
        </InputContent>
        <Actions>
          <div/>
          <Button customType='text' customSize='small'><VoteIco/><Trans>Create poll</Trans></Button>
        </Actions>
      </Container>
      </>
  )
}
