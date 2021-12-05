import { useApolloClient } from "@apollo/client";
import { useUser } from "common";
import { Feed } from "components";
import { useFeedSubscription } from "generated";
import { useRouter } from "next/router";
import { useState } from "react";

 const IniativeFeed = () => {
  
  const { id } = useRouter().query;
  const user = useUser()
  const { data:postsData, error } = useFeedSubscription({variables:{id}})
  console.log('in feed', id, postsData, user, error)

  return postsData ? <Feed posts={postsData.posts}/>: null
}

export default IniativeFeed;