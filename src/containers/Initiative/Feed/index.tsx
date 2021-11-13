import { Feed } from "components";
import { useFeedSubscription } from "generated";
import { useRouter } from "next/router";

 const IniativeFeed = () => {
  
  const { id } = useRouter().query;
  const { data:postsData, error } = useFeedSubscription({variables:{id}})
  
  return postsData ? <Feed posts={postsData.posts}/>: null
}

export default IniativeFeed;