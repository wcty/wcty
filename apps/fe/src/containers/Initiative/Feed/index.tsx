import Join, { LoginToJoin } from "../Join";
import Post from "components/Post";
import PostCreation from "./PostCreation";
import { usePostsSubscription, useFirstMemberQuery, useInitiativeByPkQuery } from "generated";
import { useRouter } from "next/router";
import { CheckedChannels, Container, Footer } from "./styles";
import { DateTime, DateTimeFormatOptions } from 'luxon'
import { useLang, useUser } from "common";
import { InitiativeProps } from "..";
import { useEffect, useRef, useState } from "react";
import { atom, useRecoilState } from "recoil";
import { Trans } from "@lingui/macro";

export default function FeedBlock({ initiative:data }: InitiativeProps ) {
  const user = useUser()
  const { data:dynamicData } = useInitiativeByPkQuery({
    variables:{ 
      id:data?.id, 
      user_id:user?.id 
    }, 
    fetchPolicy:"cache-first", 
    nextFetchPolicy:"cache-only"});

  const isMember = !!dynamicData?.initiative?.isMember?.length

  const [initiative, setInitiative] = useRecoilState(FeedBlock.atom)

  useEffect(()=>{
    if(data?.name){
      setInitiative(data)
    }
  },[data])

  if(user===undefined){
    return <>Loading...</>
  }

  if(user===null){
    return <LoginToJoin/>
  }
 
  if(isMember && initiative){
    return <Feed initiative={initiative}/>
  }

  return <Join/>
}

FeedBlock.atom = atom({
  key: "init",
  default: null as InitiativeProps['initiative'] | null
})

function Feed({initiative}:InitiativeProps) {
  const { id } = useRouter().query;
  const user = useUser()
  const { data:postsData, error } = usePostsSubscription({variables:{id}, skip: !user || !id})

  const { data } = useFirstMemberQuery({variables:{id}});

  const lang = useLang()  
  const f:DateTimeFormatOptions = {month: 'long', day: 'numeric', year:'numeric'};
  const date_created = DateTime
    .fromISO(data?.initiative_members[0].created_at)
    .setLocale(lang)
    .toLocaleString(f)

  return(
    <Container>
      <PostCreation {...{initiative}}/>
      { initiative && [...postsData?.posts||[]].map((post,  key) => <Post  {...{initiative, post}} key={key}/>) }
      <Footer>
        <div>{date_created}</div>
        <div>{data?.initiative_members[0].user?.display_name + ' '} <Trans>created initiative</Trans></div>
      </Footer>
    </Container>
  )
}