import Post from "components/Post";
import Comment from "containers/PostThread/Feed/Comment";

import CreatePost from "containers/Initiative/Feed/PostCreation";
import { useCommentsSubscription, useFirstMemberQuery, PostPageQuery } from "generated";
import { useRouter } from "next/router";
import { ArrowDown, CheckedChannels, CommentsContainer, Container, Footer } from "./styles";
import { DateTime, DateTimeFormatOptions } from 'luxon'
import { useLang, useUser } from "common";
import { Trans } from "@lingui/macro";
import { Text, Title } from "@ui";
import CommentCreation from "./CommentCreation";

export default function Feed({ post }: PostPageQuery) {
  const { id } = useRouter().query;
  const user = useUser()
  const { data: { comments }={ comments:[] }, error } = useCommentsSubscription({variables:{
    post_id:post?.id,
    id: post?.initiative?.id,
  }})

  return(
    <Container>
      <Title h='h2' alignSelf='center' mb='4rem'>{post?.initiative.name}</Title>
      {post?.initiative && <Post  {...{initiative: post.initiative, post}}/>}
      
      {comments.length===5 && 
        <Text 
          button
          customColor="label" 
          alignItems='center' 
          mt='1rem' mb='1rem' 
          justifyContent='flex-start' 
          display='flex'><ArrowDown/> See more comments</Text>}
      <CommentsContainer>
        { comments.map((comment,  key) => 
          <Comment {...{comment}} key={key}/>) } 
        <CommentCreation />
      </CommentsContainer>
    </Container>
  )
}