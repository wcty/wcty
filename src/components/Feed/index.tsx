import { useUser } from "common";
import Post from "components/Post";
import CreatePost from "components/Post/CreatePost";
import { IPost } from "components/Post/types/IPost";
import { FeedFragment, useFirstMemberQuery, useInitiativeByPkQuery } from "generated";
import { useRouter } from "next/router";
import { CheckedChannels, Container, Footer } from "./styles";
const checkedChannels = ['збір-коштів','Розробкапроєкту'];

function Feed({posts}:{posts:FeedFragment[]}) {
  const { id } = useRouter().query;
  const { data } = useFirstMemberQuery({variables:{id}});

  return(
    <Container>
      <CheckedChannels>
          { posts.reduce((agg,v)=>
            agg.includes(v.thread_id)?
            agg:[...agg,v.thread_id],[] as string[])
              .map((channel, i) => `#${channel}`) }
      </CheckedChannels>
      <CreatePost/>
      { posts.map((post,  key) => <Post  {...post} key={key}/>) }
      <Footer>
        <div>{data?.initiative_members[0].created_at}</div>
        <div>{data?.initiative_members[0].user?.display_name} створила/ив ініціативу</div>
      </Footer>
    </Container>
  )
}

export default Feed;