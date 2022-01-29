import Post from "./Post";
import CreatePost from "containers/Initiative/Feed/Post/CreatePost";
import { useFeedSubscription, useFirstMemberQuery } from "generated";
import { useRouter } from "next/router";
import { CheckedChannels, Container, Footer } from "./styles";
import { DateTime, DateTimeFormatOptions } from 'luxon'
import { useLang, useUser } from "common";

function Feed() {
  const { id } = useRouter().query;
  const user = useUser()
  const { data:postsData, error } = useFeedSubscription({variables:{id}})

  const { data } = useFirstMemberQuery({variables:{id}});

  const lang = useLang()  
  const f:DateTimeFormatOptions = {month: 'long', day: 'numeric', year:'numeric'};
  const date_created = DateTime
    .fromISO(data?.initiative_members[0].created_at)
    .setLocale(lang)
    .toLocaleString(f)

  const channels = postsData?.posts?.reduce((agg,v)=>
    agg.includes(v.thread_id)?
    agg:[...agg,v.thread_id],[] as string[])
      .map((channel, i) => channel)||[]

  return(
    <Container>
      <CheckedChannels>
          { channels }
      </CheckedChannels>
      <CreatePost {...{channels}}/>
      { postsData?.posts.map((post,  key) => <Post  {...post} key={key}/>) }
      <Footer>
        <div>{date_created}</div>
        <div>{data?.initiative_members[0].user?.display_name} створила/ив ініціативу</div>
      </Footer>
    </Container>
  )
}

export default Feed;