import {  Actions, CommentCounter,  Container, Content, ImageContainer, ImageWrapper, LikeCounter, Likes, Message, OptionsButton, OptionsMenu, Tags } from "./styles";
import Author from "./Author";
import { ReactComponent as CommentIco } from '@assets/icons/comment.svg'
import { ReactComponent as LikeIco} from '@assets/icons/like.svg'
import { FeedFragment, Reactions_Enum, useReactionToPostMutation, useDeleteLikeMutation, useDeletePostMutation, File_Types_Enum } from "generated";
import { fixAvatar, useUser } from "common";
import { Trans } from "@lingui/macro";
import { Button, Loader } from "@ui";
import { useEffect, useState } from "react";
import { ReactComponent as OptionsIcon} from '@assets/icons/post-options.svg'


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

export default function Post(props: FeedFragment ) {
  const {user: author, id: post_id, message, files, comments_aggregate, reactions} = props;
  const user = useUser();
  const [deletePost, {error}] = useDeletePostMutation({variables:{ post_id }});
  const [deleteLike] = useDeleteLikeMutation({variables:{ user_id: user?.id, post_id }});
  const [likePost] = useReactionToPostMutation({variables:{ user_id: user?.id, post_id, reaction: Reactions_Enum.Like}});
  const liked = !!reactions.find(reaction => reaction.user_id ===  user?.id);
  const [options, setOptions] = useState(false)

  // console.log(error)

  const [imageParams, setImageParams] = useState<CSSImageType[]>()
  console.log('files', files)
  console.log('params', imageParams)

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

  return(
    <Container >
      <Author
        avatar={fixAvatar(author?.avatar_url)}
        name={author?.display_name||''}
        date={new Date()}
      />
      {props?.user?.id===user?.id && <>
        <OptionsButton
          customType='secondary' 
          onClick={()=>setOptions(!options)} 
          customSize='small'/>
        {options && 
          <OptionsMenu >
            <Button style={{pointerEvents:'all'}} onClick={()=>{ console.log('click'); setOptions(false); }} width='100%' customType='secondary'>
              <Trans>Edit</Trans>
            </Button>
            <Button style={{pointerEvents:'all'}} onClick={()=>{ deletePost(); setOptions(false); }} width='100%' customType='secondary'>
              <Trans>Delete</Trans>
            </Button>
          </OptionsMenu>}
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
            />
          )}
        </ImageContainer>: null }
      </Content>
      <Actions> 
        <CommentCounter>
          <Trans>Comments:</Trans> {comments_aggregate?.aggregate?.count}
        </CommentCounter>
        <Button customType="text" customSize="small">
            <CommentIco/>
            <Trans>Comment</Trans>
        </Button>
        <Likes liked={liked}>
            <LikeCounter>{reactions.length}</LikeCounter>
            <LikeIco onClick={()=>liked? deleteLike(): likePost() }/>
        </Likes>
      </Actions>
    </Container>
  )
}
