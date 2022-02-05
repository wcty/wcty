import { Avatar, TextField, Button, IconButton, TextArea } from "@ui";
import { InputContent, Actions, Container } from "./styles";
import { fixAvatar, useUser } from "common";
import { useRef, useState } from "react";
import { Trans } from '@lingui/macro'
import { CommentFragment, PostPageQuery, useCreateCommentMutation } from "generated";
import { IEmojiData } from "emoji-picker-react";
import { useRouter } from "next/router";

export default function CreatePost({ post }: PostPageQuery|{post: CommentFragment}){
  
  const user = useUser();
  const router = useRouter();
  const { id, post_id } = router.query;
  const [editorOpen, setEditorOpen] = useState(false);
  const [message, setMessage] = useState(post?.message || '')
  const inputRef = useRef<HTMLTextAreaElement|any>();
  const [loading, setLoading] = useState(false)
  const parent_comment_id = undefined;

  const [addComment, { error }] = useCreateCommentMutation({
    variables:{
      initiative_id: id,
      post_id,
      parent_comment_id,
      user_id: user?.id,
      message
    }
  });

  return (
      <>
      <Container>
        <InputContent> 
            <Avatar customSize={'small'} picture={
              fixAvatar(user?.avatar_url)
            }/>
            <TextField
              onImageClick={()=>setEditorOpen(true)} 
              extendable
              height="1rem" 
              disabled={loading}
              value={message} 
              //withImage 
              commentStyle
              onChange={(e:any)=>setMessage(e.target.value)}
            />
            <IconButton 
              onClick={()=>{
                if(message.length > 1){
                  setMessage('')
                  addComment()
                }
              }} 
              style={{alignSelf: 'start', marginTop:'0.5rem'}} 
              icon="send" 
              customSize="small"/>
        </InputContent>
      </Container>
      </>
  )
}
