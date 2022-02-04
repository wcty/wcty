import { Actions, CommentCounter,  Container, Content, ImageContainer, ImageWrapper, LikeCounter, Likes, Message, OptionsButton, OptionsMenu, Tags, DeletionMenu } from "./styles";
import { ReactComponent as CommentIco } from '@assets/icons/comment.svg'
import { ReactComponent as LikeIco} from '@assets/icons/like.svg'
import { PostFragment, Reactions_Enum, useReactionToPostMutation, useDeleteLikeMutation, useDeletePostMutation, File_Types_Enum, GetFilesDocument } from "generated";
import { fixAvatar, useUser } from "common";
import { Trans } from "@lingui/macro";
import { Button, Author } from "@ui";
import { useEffect, useState } from "react";
import PostEditor from "../PostEditor";
import { InitiativeProps } from "containers/Initiative";
import { FullscreenCarousel, GalleryImage } from "components/Gallery";
import { useRecoilState } from 'recoil';
import Sidepanel from "containers/Sidepanel";

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
  InitiativeProps & {
    post: PostFragment 
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

  const user = useUser();

  const [deletePost, {error}] = useDeletePostMutation({
    variables:{ post_id },
    refetchQueries: [ GetFilesDocument ]
  });

  const [deleteLike] = useDeleteLikeMutation({
    variables:{ 
      user_id: user?.id, 
      post_id }
  });

  const [likePost] = useReactionToPostMutation({
    variables:{ 
      user_id: user?.id, 
      post_id, 
      reaction: Reactions_Enum.Like },
  });

  const liked = !!reactions.find(reaction => reaction.user_id ===  user?.id);
  const [options, setOptions] = useState(false)
  const [deletion, setDeletion] = useState(false)
  const [editorOpen, setEditorOpen] = useState(false)
  const [imageParams, setImageParams] = useState<CSSImageType[]>()
  const [fullscreen, setFullscreen] = useState<{
    images: GalleryImage[],
    defaultIndex: number
  }>()
  const [_, setSidebarVisible] = useRecoilState(Sidepanel.visible)

  useEffect(()=>{

    (async function getImageParams(){
      const images = files
        .filter(file => file.type === File_Types_Enum.Image)
        .map(file => file.downloadable_url)

      if(images){
        const imagesObject:ImageType[] = []

        for(let i=0; i<(images?.length||0); i++){
          const url = images?.[i]
          const imageObject:ImageType = await (new Promise((resolve, reject)=>{
            var img = new Image();
            img.onload = function(){
              resolve({
                url: url||'',
                width:img.width,
                height:img.height
              })
            }
            img.src = url||'';
          }))
          imagesObject.push(imageObject)
        }
        const max = Math.max(...imagesObject?.map(v=>v.width))
        const min = Math.min(...imagesObject?.map(v=>v.width))
        const scaled:CSSImageType[] = imagesObject?.map(v=>{
          const norm = (v.width-min)/(max-min)
          const coeff = norm/v.width
          return ({
            ...v,
            height: v.width*coeff*10 + '%',
            width: norm*10 + '%'
          })
        })
        setImageParams(scaled)
      }
    })()
  },[files])

  return(<>
    {editorOpen && <PostEditor {...{initiative, post}} onClose={()=>setEditorOpen(false)} /> }
    <Container onClick={()=>options && setOptions(!options)} >
      <Author
        ml='1.5rem'
        mt='1.5rem'
        picture={fixAvatar(author?.avatar_url)}
        name={author?.display_name||''}  
        date={new Date(props.created_at)}/>      
      {author?.id===user?.id && <>
        <OptionsButton
          customType='secondary' 
          onClick={()=>{
            setOptions(!options)
            setDeletion(false)
          }} 
          customSize='small'/>
        
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
              customType='secondary'>
                <Trans>Edit</Trans>
            </Button>
            <Button 
              style={{pointerEvents:'all'}} 
              onClick={()=>{ 
                setDeletion(true)
                setOptions(false); 
              }} 
              width='100%' 
              customType='secondary'>
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
                customType='primary'>
                  <Trans>Delete</Trans>
              </Button>
              <Button 
                style={{pointerEvents:'all'}} 
                onClick={()=>{ 
                  setOptions(false); 
                  setDeletion(false);
                }} 
                width='100%' 
                customType='outlined'>
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
          <Button customType="text" customSize="small">
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
