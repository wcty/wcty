import { useUser } from "common";
import { Feed } from "components";
import { useFeedSubscription } from "generated";
import { useRouter } from "next/router";

 const IniativeFeed = () => {
  
  const { id } = useRouter().query;
  const user = useUser()
  const { data:postsData, error } = useFeedSubscription({variables:{id}})

  return postsData ? <Feed posts={postsData.posts}/>: null
}

export default IniativeFeed;