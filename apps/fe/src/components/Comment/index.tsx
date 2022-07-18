import { Actions, CommentCounter,  Container, Content, ImageContainer, ImageWrapper, LikeCounter, Likes, Message, OptionsButton, OptionsMenu, Tags, DeletionMenu, EditorContainer } from "./styles";
import { ReactComponent as LikeIco} from '@assets/icons/like.svg'
import { 
  Reactions_Enum, 
  useReactionToCommentMutation, 
  useDeleteCommentLikeMutation, 
  useDeleteCommentMutation, 
  File_Types_Enum, 
  GetFilesDocument, 
  CommentFragment, 
  SubCommentFragment
} from "generated";
import { fixAvatar } from "common";
import { Trans } from "@lingui/macro";
import { Button, Author } from "@ui";
import { useEffect, useState } from "react";
import { FullscreenCarousel, GalleryImage } from "components/Gallery";
import { useRecoilState } from 'recoil';
import Sidepanel from "containers/Sidepanel";
import { useRouter } from "next/router";
import CommentCreation from "../CommentEditor";
import useImages from "common/hooks/useImages";
import { useUserData } from '@nhost/nextjs';

type ImageType = {
  url: string,
  width: number,
  height: number
}

type CSSImageType = {
  url: string,
  width: number|string,
  height: number|string
}

export default function Comment({ comment, onReply }: 
  {
    comment: CommentFragment|SubCommentFragment,
    onReply?: ()=>void
}){

  const {
    user: author, 
    id: comment_id, 
    message, 
    post_id,
    files, 
    comments_aggregate, 
    reactions,
    initiative_id,
    ...props
  } = comment;

  // console.log('comment', comment);
  const user = useUserData();
  const router = useRouter();

  const [deleteComment, {error}] = useDeleteCommentMutation({
    variables:{ post_id, initiative_id, comment_id },
    refetchQueries: [ GetFilesDocument ]
  });

  const [deleteLike, {error: deleteError}] = useDeleteCommentLikeMutation({
    variables:{ 
      user_id: user?.id, 
      post_id,
      comment_id,
      initiative_id 
    }});


  const [likeComment, {error: likeError}] = useReactionToCommentMutation({
    variables:{ 
      user_id: user?.id, 
      post_id, 
      reaction: Reactions_Enum.Like,
      initiative_id,
      comment_id 
    }});

  const liked = !!reactions.find(reaction => reaction.user_id ===  user?.id);
  const [options, setOptions] = useState(false)
  const [deletion, setDeletion] = useState(false)
  const [editorOpen, setEditorOpen] = useState(false)
  const [replyOpen, setReplyOpen] = useState(false)

  const [fullscreen, setFullscreen] = useState<{
    images: GalleryImage[],
    defaultIndex: number
  }>()
  
  const [_, setSidebarVisible] = useRecoilState(Sidepanel.visible)

  const { imageParams } = useImages(files)

  const { id } = router.query

  return(<>
    <Container onClick={()=>options && setOptions(!options)} >
      <Author
        ml='1.5rem'
        mt='1.5rem'
        onClick={
          ()=>router.push({
              pathname: `/initiative/[id]/members/[user_id]`, 
              query: { id, user_id: author?.id }
            }, 
            `/initiative/${id}/members/${author?.id}`, 
            { locale: router.locale }
          )
        }
        picture={fixAvatar(author?.avatar_url)}
        name={author?.display_name||''}  
        date={new Date(props.created_at)}/>      
      {author?.id===user?.id && <>
        <OptionsButton
          t='secondary' 
          onClick={()=>{
            setOptions(!options)
            setDeletion(false)
          }} 
          s='small'/>
        
        {options && 
          <OptionsMenu >
            <Button 
              style={{pointerEvents:'all'}} 
              onClick={()=>{ 
                console.log('click'); 
                setEditorOpen(true)
                setOptions(false); 
              }} 
              width='100%' 
              t='secondary'>
                <Trans>Edit</Trans>
            </Button>
            <Button 
              style={{pointerEvents:'all'}} 
              onClick={()=>{ 
                setDeletion(true)
                setOptions(false); 
              }} 
              width='100%' 
              t='secondary'>
                <Trans>Delete</Trans>
            </Button>
          </OptionsMenu>}
        {deletion && 
          <DeletionMenu>
            <span>
              You will not be able to restore the post after deleting it. 
              Are you sure you want to proceed?
            </span>
            <div>
              <Button 
                style={{pointerEvents:'all'}} 
                onClick={()=>{ 
                  deleteComment(); 
                  setOptions(false); 
                  setDeletion(false);
                }} 
                width='100%' 
                t='primary'>
                  <Trans>Delete</Trans>
              </Button>
              <Button 
                style={{pointerEvents:'all'}} 
                onClick={()=>{ 
                  setOptions(false); 
                  setDeletion(false);
                }} 
                width='100%' 
                t='outlined'>
                  <Trans>Return</Trans>
              </Button>
            </div>
          </DeletionMenu>}
      </>}
      <Content>
        {editorOpen ?
         <CommentCreation noAvatar ml='-2rem' width='calc(100% + 4rem)' comment={comment} onClose={()=>setEditorOpen(false)}/>:
         <Message>{
          message?.replaceAll(
            '\\n', `
          `)
        }</Message>}
      {imageParams?.length ? 
        <ImageContainer>
          {imageParams?.map((v,key)=>
            <ImageWrapper 
              key={key}
              url={v.url} 
              minHeight={v.height}
              onClick={()=>{
                setSidebarVisible(false)
                setFullscreen({
                  images: imageParams.map(v=>({
                    url: v.url
                  })),
                  defaultIndex: key
                })
              }}
            />
          )}
        </ImageContainer>: null }
      </Content>
      <Actions> 
        <div style={{display:'flex', alignItems: 'center'}}>
          <CommentCounter>
            <Trans>Likes:</Trans> {reactions.length}
          </CommentCounter>
          <Button 
            onClick={()=>{ 
              if(onReply){
                onReply()
              }else{
                setReplyOpen(true)
              }
            }}
            t="text" 
            s="small">
              <Trans>Reply</Trans>
          </Button>
        </div>
        <Likes liked={liked}>
            <LikeIco onClick={()=>liked? deleteLike(): likeComment() }/>
        </Likes>
      </Actions>

      { !comment?.parent_comment_id && 
       'comments' in comment &&
      <EditorContainer>
        { comment?.comments.map((c,key) => 
          <Comment key={key} {...{comment: c, onReply: ()=>setReplyOpen(true) }}/>) } 
        {replyOpen && <CommentCreation parent={comment}/>}
      </EditorContainer>}
    </Container>
    {fullscreen && 
      <FullscreenCarousel 
        {...fullscreen} 
        onClose={()=>{
          setFullscreen(undefined)
          setSidebarVisible(true)
        }} />}
  </>)
}
