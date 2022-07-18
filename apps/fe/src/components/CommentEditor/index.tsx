import { Avatar, TextField, IconButton } from "@ui";
import { InputContent, Container } from "./styles";
import { fixAvatar, useUploader } from "common";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { CommentFragment, GetFilesDocument, PostPageQuery, SubCommentFragment, useCreateCommentMutation, useDeleteFilesMutation, useUpdateCommentMutation } from "generated";
import { useRouter } from "next/router";
import type { IEmojiData } from "emoji-picker-react";
import { FullscreenCarousel, GalleryImage } from "components/Gallery";
import { useRecoilState } from "recoil";
import Sidepanel from "containers/Sidepanel";
import { PositionProps, LayoutProps, SpaceProps, FlexProps } from "styled-system";
import { useUserData } from '@nhost/nextjs';

export default function CommentEditor({ 
  parent, 
  comment, 
  onClose, 
  noAvatar,
  ...props
}:{ 
  parent?: CommentFragment|PostPageQuery['post'], 
  comment?:CommentFragment|SubCommentFragment, 
  onClose?:()=>void, 
  noAvatar?:boolean
} & PositionProps&LayoutProps&SpaceProps&FlexProps ){
  
  const user = useUserData();
  const router = useRouter();
  const { id, post_id } = router.query;
  const [editorOpen, setEditorOpen] = useState(false);
  const [message, setMessage] = useState(comment?.message || '')
  const inputRef = useRef<HTMLInputElement|any>();
  const [loading, setLoading] = useState(false)
  const [emojiOpen, setEmojiOpen] = useState(false);
  const [fullscreen, setFullscreen] = useState<{
    images: GalleryImage[],
    defaultIndex: number
  }>()
  
  const [_, setSidebarVisible] = useRecoilState(Sidepanel.visible)
  const [deletionFiles, setDeletionFiles] = useState<string[]>([])

  const onEmojiClick = (event: React.MouseEvent, emojiObject: IEmojiData) => {
    const cursor = inputRef?.current?.selectionStart;
    const text =
      message.slice(0, cursor) + emojiObject.emoji + message.slice(cursor);
      setMessage(text);
  };

  const {onInputChange, filesData, reset, submit } = useUploader()

  let parent_comment_id;
  if(parent && 'parent_comment_id' in parent){
    parent_comment_id = parent?.id;
  }
  const [updateComment, { error:updateError }] = useUpdateCommentMutation()
  const [addComment, { error }] = useCreateCommentMutation({
    variables:{
      initiative_id: id,
      post_id,
      parent_comment_id,
      user_id: user?.id,
      message
    }
  });
  const [deleteFiles, { error:deleteError }] = useDeleteFilesMutation()

  const submitComent = async ()=>{ 
    if(comment){
      setLoading(true)
      // Here delete photos
      await deleteFiles({
        variables:{where:{id:{_in:deletionFiles}}},
        refetchQueries: [ GetFilesDocument ]
      })
      // Here update post
      if(filesData?.length){
        const results = await submit({
          createRecord: true,
          props:{
            post_id: comment.post_id,
            initiative_id: comment.initiative_id,
            comment_id: comment.id
          },
          multiple: true,
          keepSelected: true
        })
      }
      await updateComment({
        variables:{
          message,
          post_id: comment.post_id,
          initiative_id: comment.initiative_id,
          comment_id: comment.id,
          now: new Date()
        },
        refetchQueries: [ GetFilesDocument ]
      })
      setMessage(''); 
      onClose?.()
      reset();
    }else{
      setLoading(true)
      const results = await submit({
        createRecord: false,
        multiple: true,
        props:{
          post_id,
          initiative_id: id
        }
      })

      console.log('results', results)

      await addComment({
        variables:{
          initiative_id:id, 
          post_id,
          user_id: user?.id, 
          message,
          files: {
            data: 
              results?.map(file=>({
                downloadable_url: file.url,
                file_path: file.path,
                user_id: user?.id,
              }))||[]
          }
        },
        refetchQueries: [ GetFilesDocument ]
      }); 

      setMessage(''); 
      reset();
    }
  }

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
      <Container {...props}>
        <InputContent> 
            {!noAvatar && <Avatar s={'small'} picture={
              fixAvatar(user?.avatarUrl)
            }/>}
            <TextField
              onImageClick={()=>setEditorOpen(true)} 
              extendable
              height="1rem" 
              disabled={loading}
              value={message} 
              withImage 
              withEmoji
              onClick={()=>setEmojiOpen(false)} 
              {...{inputRef, onEmojiClick}} 
              {...{emojiOpen, setEmojiOpen}} 
              commentStyle
              onChange={(e:any)=>setMessage(e.target.value)}
              onImageSubmit={(e,o)=>onInputChange(e,{ ...o, keepSelected: true })}
              images={filesData?.map(v=>v.blob)}
              deleteImage={(index, options)=>{
                const id = options?.id
                if(id){
                  setDeletionFiles([...deletionFiles, id])  
                }else{
                  const newFilesData = filesData?.filter((v, i)=>i!==index)
                  onInputChange({
                    target:{
                      files: newFilesData?.map(v=>v.file) as unknown as FileList|null
                    }
                  } as ChangeEvent<HTMLInputElement>)
                }
              }}/>
            <IconButton 
              onClick={submitComent} 
              style={{alignSelf: 'start', marginTop:'0.5rem'}} 
              icon="send" 
              s="small"/>
        </InputContent>
      </Container>
      {fullscreen && 
        <FullscreenCarousel 
          {...fullscreen} 
          onClose={()=>{
            setFullscreen(undefined)
            setSidebarVisible(true)
        }} />}
      </>
  )
}
