import { Feed } from "components";
import { useFeedSubscription } from "generated";
import { useParams } from "react-router-dom";

 const IniativeFeed = () => {
  
  const { id } = useParams<{id:string}>();
  const { data:postsData, error } = useFeedSubscription({variables:{id}})
  
  return postsData ? <Feed posts={postsData.posts}/>: null
}

export default IniativeFeed;