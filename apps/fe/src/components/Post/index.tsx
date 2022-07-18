import { Actions, CommentCounter,  Container, Content, ImageContainer, ImageWrapper, LikeCounter, Likes, Message, OptionsButton, OptionsMenu, Tags, DeletionMenu } from "./styles";
import { ReactComponent as CommentIco } from '@assets/icons/comment.svg'
import { ReactComponent as LikeIco} from '@assets/icons/like.svg'
import { PostFragment, Reactions_Enum, useReactionToPostMutation, useDeleteLikeMutation, useDeletePostMutation, File_Types_Enum, GetFilesDocument, PostInitiativeInfoFragment } from "generated";
import { fixAvatar } from "common";
import { Trans } from "@lingui/macro";
import { Button, Author } from "@ui";
import { useEffect, useState } from "react";
import PostEditor from "../PostEditor";
import { FullscreenCarousel, GalleryImage } from "components/Gallery";
import { useRecoilState } from 'recoil';
import Sidepanel from "containers/Sidepanel";
import { useRouter } from "next/router";
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

export default function Post({
  initiative, 
  post
}: 
  {
    post: PostFragment,
    initiative: PostInitiativeInfoFragment
}){

  const {
    user: author, 
    id: post_id, 
    message, 
    files, 
    comments_aggregate, 
    reactions,
    ...props
  } = post;

  const user = useUserData();
  const router = useRouter();

  const [deletePost, {error}] = useDeletePostMutation({
    variables:{ post_id, initiative_id: initiative?.id },
    refetchQueries: [ GetFilesDocument ]
  });

  const [deleteLike] = useDeleteLikeMutation({
    variables:{ 
      user_id: user?.id, 
      post_id,
      initiative_id: initiative?.id
    }});

  const [likePost] = useReactionToPostMutation({
    variables:{ 
      user_id: user?.id, 
      post_id, 
      reaction: Reactions_Enum.Like,
      initiative_id: initiative?.id
    }});

  const liked = !!reactions.find(reaction => reaction.user_id ===  user?.id);
  const [options, setOptions] = useState(false)
  const [deletion, setDeletion] = useState(false)
  const [editorOpen, setEditorOpen] = useState(false)
  const [fullscreen, setFullscreen] = useState<{
    images: GalleryImage[],
    defaultIndex: number
  }>()
  const [_, setSidebarVisible] = useRecoilState(Sidepanel.visible)

  const { imageParams } = useImages(files)
  const { id } = router.query

  return(<>
    {editorOpen && <PostEditor {...{initiative, post}} onClose={()=>setEditorOpen(false)} /> }
    <Container onClick={()=>options && setOptions(!options)} >
      <Author
        ml='1.5rem'
        mt='1.5rem'
        picture={fixAvatar(author?.avatar_url)}
        onClick={
          ()=>router.push({
              pathname: `/initiative/[id]/members/[user_id]`, 
              query: { id, user_id: author?.id }
            }, 
            `/initiative/${id}/members/${author?.id}`, 
            { locale: router.locale }
          )
        }
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
                  deletePost(); 
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
        <Message>{
          message?.replaceAll(
            '\\n', `
          `)
        }</Message>
      {imageParams?.length ? 
        <ImageContainer>
          {imageParams?.map((v,key)=>
            <ImageWrapper 
              key={key}
              url={v.url} 
              width={v.width}
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
            <Trans>Comments:</Trans> {comments_aggregate?.aggregate?.count}
          </CommentCounter>
          <Button 
            onClick={()=>{ 
              router.push({
                pathname: '/initiative/[id]/post/[post_id]', 
                query: { id: initiative?.id, post_id: post_id }
              }, `/initiative/${initiative?.id}/post/${post_id}`, { 
                locale: router.locale 
              }) 
            }}
            t="text" 
            s="small">
              <CommentIco/>
              <Trans>Comment</Trans>
          </Button>
        </div>
        <Likes liked={liked}>
            <LikeCounter>{reactions.length}</LikeCounter>
            <LikeIco onClick={()=>liked? deleteLike(): likePost() }/>
        </Likes>
      </Actions>
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
