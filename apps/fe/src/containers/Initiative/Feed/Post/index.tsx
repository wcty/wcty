import {  Actions, CommentCounter,  Container, Content, LikeCounter, Likes, Message, OptionsButton, OptionsMenu, Tags } from "./styles";
import Author from "./Author";
import { ReactComponent as CommentIco } from '@assets/icons/comment.svg'
import { ReactComponent as LikeIco} from '@assets/icons/like.svg'
import { FeedFragment, Reactions_Enum, useReactionToPostMutation, useDeleteLikeMutation, useDeletePostMutation } from "generated";
import { fixAvatar, useUser } from "common";
import { Trans } from "@lingui/macro";
import { Button } from "@ui";
import { useState } from "react";
import { ReactComponent as OptionsIcon} from '@assets/icons/post-options.svg'

export default function Post(props: FeedFragment ) {
  const {user: author, id: post_id, message, comments_aggregate, reactions} = props;
  const user = useUser();
  const [deletePost, {error}] = useDeletePostMutation({variables:{ post_id }});
  const [deleteLike] = useDeleteLikeMutation({variables:{ user_id: user?.id, post_id }});
  const [likePost] = useReactionToPostMutation({variables:{ user_id: user?.id, post_id, reaction: Reactions_Enum.Like}});
  const liked = !!reactions.find(reaction => reaction.user_id ===  user?.id);
  const [options, setOptions] = useState(false)

  console.log(error)

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
