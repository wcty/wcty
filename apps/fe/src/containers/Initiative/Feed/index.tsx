import ClientOnly from "components/ClientOnly";
import Join, { LoginToJoin } from "../Join";

import Post from "./Post";
import CreatePost from "containers/Initiative/Feed/CreatePost";
import { usePostsSubscription, useFirstMemberQuery } from "generated";
import { useRouter } from "next/router";
import { CheckedChannels, Container, Footer } from "./styles";
import { DateTime, DateTimeFormatOptions } from 'luxon'
import { useLang, useUser } from "common";
import { InitiativeProps } from "..";
import { useEffect, useRef, useState } from "react";
import { atom, useRecoilState } from "recoil";
import { Trans } from "@lingui/macro";

export default function FeedBlock({ isMember=false, initiative:data }:{ isMember?:boolean } & InitiativeProps ) {
  const user = useUser()
  const [initiative, setInitiative] = useRecoilState(FeedBlock.atom)

  useEffect(()=>{
    if(data?.name){
      setInitiative(data)
    }
  },[data])
 
  return  user ? (
      isMember?
        <ClientOnly>
         {initiative && <Feed initiative={initiative}/>}
        </ClientOnly>:
        <Join/>
    ): <LoginToJoin/> 
}

FeedBlock.atom = atom({
  key: "init",
  default: null as InitiativeProps['initiative'] | null
})

function Feed({initiative}:InitiativeProps) {
  const { id } = useRouter().query;
  const user = useUser()
  const { data:postsData, error } = usePostsSubscription({variables:{id}})

  const { data } = useFirstMemberQuery({variables:{id}});

  const lang = useLang()  
  const f:DateTimeFormatOptions = {month: 'long', day: 'numeric', year:'numeric'};
  const date_created = DateTime
    .fromISO(data?.initiative_members[0].created_at)
    .setLocale(lang)
    .toLocaleString(f)

  return(
    <Container>
      <CheckedChannels>
          {/* { channels } */}
      </CheckedChannels>
      <CreatePost {...{initiative}}/>
      { [...postsData?.posts||[]].map((post,  key) => <Post  {...{initiative, post}} key={key}/>) }
      <Footer>
        <div>{date_created}</div>
        <div>{data?.initiative_members[0].user?.display_name + ' '} <Trans>created initiative</Trans></div>
      </Footer>
    </Container>
  )
}