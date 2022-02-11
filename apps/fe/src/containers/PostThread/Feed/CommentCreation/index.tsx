import { Avatar, TextField, IconButton } from "@ui";
import { InputContent, Container } from "./styles";
import { fixAvatar, useUser } from "common";
import { useEffect, useRef, useState } from "react";
import { CommentFragment, PostPageQuery, useCreateCommentMutation } from "generated";
import { useRouter } from "next/router";

export default function CreateComment({ parent, comment }:{ parent: CommentFragment|PostPageQuery['post'], comment?:CommentFragment }){
  
  const user = useUser();
  const router = useRouter();
  const { id, post_id } = router.query;
  const [editorOpen, setEditorOpen] = useState(false);
  const [message, setMessage] = useState(comment?.message || '')
  const inputRef = useRef<HTMLTextAreaElement|any>();
  const [loading, setLoading] = useState(false)

  let parent_comment_id;

  if(parent && 'parent_comment_id' in parent){
    parent_comment_id = parent?.id;
  }

  const [addComment, { error }] = useCreateCommentMutation({
    variables:{
      initiative_id: id,
      post_id,
      parent_comment_id,
      user_id: user?.id,
      message
    }
  });

  useEffect(()=>{
    window.onkeydown = (e)=>{
      if(e.key === 'Enter' && (e.ctrlKey || e.metaKey) && message?.length >= 2){
        addComment()
        setMessage('')
      }
    }
    return ()=>{
      window.onkeydown = null
    }
  },[message])

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
