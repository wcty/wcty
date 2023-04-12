import Post from "components/Post";
import Comment from "components/Comment";
import { useCommentsSubscription, useFirstMemberQuery, PostPageQuery } from "generated";
import { useRouter } from "next/router";
import { ArrowDown, CommentsContainer, Container, Header } from "./styles";
import { useLayout, useUser } from "common";
import { Trans } from "@lingui/macro";
import { Text, Title } from "@ui";
import CommentCreation from "../../../components/CommentEditor";
import { ArrowLeft } from "../styles";

export default function Feed({ post }: PostPageQuery) {
  const router = useRouter();
  const { id } = router.query;
  const layout = useLayout();
  const user = useUser()
  const { data: { comments } = { comments: [] }, error } = useCommentsSubscription({
    variables: {
      post_id: post?.id,
      id: post?.initiative?.id,
    },
    skip: !user || !post?.id,
  })
  console.log('comments:', comments);

  return (
    <Container>
      <Header>
        {layout === 'mobile' &&
          <ArrowLeft
            ml='2rem'
            mb='2rem'
            style={{ transform: 'rotate(-45deg) translate(0px,0px)', overflow: 'visible', width: '1.5rem', height: '1.5rem' }}
            onClick={() => {
              router.push({
                pathname: '/initiative/[id]',
                query: { id }
              }, `/initiative/${id}`, {
                locale: router.locale
              })
            }} />
        }
        <Title s='h2' alignSelf='center' alignContent='center' position='relative' mb='4rem' pr='3rem' flex='1 1 auto' justifyContent='center'>
          {post?.initiative.name}
        </Title>
      </Header>
      {post?.initiative && <Post  {...{ initiative: post.initiative, post }} />}

      {comments.length === 5 &&
        <Text
          button
          c="label"
          alignItems='center'
          mt='1rem' mb='1rem'
          justifyContent='flex-start'
          display='flex'><ArrowDown /><Trans>See more comments</Trans></Text>}
      <CommentsContainer>
        {comments.map((comment, key) =>
          <Comment {...{ comment }} key={key} initiative={post?.initiative} />)}
        <CommentCreation parent={post} initiative={post?.initiative} />
      </CommentsContainer>
    </Container>
  )
}