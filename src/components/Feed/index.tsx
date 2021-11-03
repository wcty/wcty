import { useUser } from "common";
import Post, { CreatePost } from "components/Post";
import { IPost } from "components/Post/types/IPost";
import { FeedQuery, useFirstMemberQuery, useInitiativeByPkQuery } from "generated";
import { useParams } from "react-router-dom";
import { CheckedChannels, Container, Footer } from "./styles";
const checkedChannels = ['збір-коштів','Розробкапроєкту'];

function Feed({posts}:FeedQuery) {
  const { id } = useParams<{id:string}>();
  const user = useUser()
  const {data} = useFirstMemberQuery({variables:{id}});

  return(
    <Container>
      <CheckedChannels>
          { posts.reduce((agg,v)=>
            agg.includes(v.thread.name)?
            agg:[...agg,v.thread.name],[] as string[])
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