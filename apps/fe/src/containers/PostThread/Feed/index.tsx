import Post from "components/Post";
import Comment from "containers/PostThread/Feed/Comment";

import CreatePost from "containers/Initiative/Feed/PostCreation";
import { useCommentsSubscription, useFirstMemberQuery, PostPageQuery } from "generated";
import { useRouter } from "next/router";
import { ArrowDown, CheckedChannels, CommentsContainer, Container, Footer } from "./styles";
import { DateTime, DateTimeFormatOptions } from 'luxon'
import { useLang, useLayout, useUser } from "common";
import { Trans } from "@lingui/macro";
import { Text, Title } from "@ui";
import CommentCreation from "./CommentCreation";
import { ArrowLeft } from "../styles";

export default function Feed({ post }: PostPageQuery) {
  const router = useRouter();
  const { id } = router.query;
  const layout = useLayout();
  const user = useUser()
  const { data: { comments }={ comments:[] }, error } = useCommentsSubscription({variables:{
      post_id:post?.id,
      id: post?.initiative?.id,
    },
    skip: !user || !post?.id,
  })
  console.log('comments:', comments);

  return(
    <Container>
      <Title h='h2' alignSelf='center' alignContent='center' position='relative' mb='4rem'>{
        layout==='mobile' && 
          <ArrowLeft 
            mr='0px'
            style={{transform:'rotate(-45deg) translate(-10px,-10px)'}}
            onClick={()=>{
              router.push({
                pathname: '/initiative/[id]', 
                query: { id }
              }, `/initiative/${id}`, { 
                locale: router.locale 
              }) 
            }}/>
      }{post?.initiative.name}</Title>
      {post?.initiative && <Post  {...{initiative: post.initiative, post}}/>}
      
      {comments.length===5 && 
        <Text 
          button
          customColor="label" 
          alignItems='center' 
          mt='1rem' mb='1rem' 
          justifyContent='flex-start' 
          display='flex'><ArrowDown/><Trans>See more comments</Trans></Text>}
      <CommentsContainer>
        { comments.map((comment,  key) => 
          <Comment {...{comment}} key={key}/>) } 
        <CommentCreation parent={post}/>
      </CommentsContainer>
    </Container>
  )
}