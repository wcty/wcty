import Post from "components/Post";
import CreatePost from "components/Post/CreatePost";
import { FeedFragment, useFirstMemberQuery } from "generated";
import { useRouter } from "next/router";
import { CheckedChannels, Container, Footer } from "./styles";
import { DateTime, DateTimeFormatOptions } from 'luxon'
import { useLang } from "common";

function Feed({posts}:{posts:FeedFragment[]}) {
  const { id } = useRouter().query;
  const { data } = useFirstMemberQuery({variables:{id}});

  const lang = useLang()  
  const f:DateTimeFormatOptions = {month: 'long', day: 'numeric', year:'numeric'};
  const date_created = DateTime
    .fromISO(data?.initiative_members[0].created_at)
    .setLocale(lang)
    .toLocaleString(f)

  const channels = posts.reduce((agg,v)=>
    agg.includes(v.thread_id)?
    agg:[...agg,v.thread_id],[] as string[])
      .map((channel, i) => channel)

  return(
    <Container>
      <CheckedChannels>
          { channels }
      </CheckedChannels>
      <CreatePost {...{channels}}/>
      { posts.map((post,  key) => <Post  {...post} key={key}/>) }
      <Footer>
        <div>{date_created}</div>
        <div>{data?.initiative_members[0].user?.display_name} створила/ив ініціативу</div>
      </Footer>
    </Container>
  )
}

export default Feed;