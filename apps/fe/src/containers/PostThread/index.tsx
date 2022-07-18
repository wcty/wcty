import Feed from "./Feed";
import { ArrowLeft, Body, CenterColumn, Container } from "./styles";
import { InitiativePublicByPkQuery, PostPageQuery, useInitiativeByPkQuery } from "generated";
import { useLayout } from "common";
import Redirect from "components/Redirect";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Text } from "@ui";
import { useRecoilState } from "recoil";
import Sidebar from "containers/Sidepanel";
import { useUserData } from '@nhost/nextjs';

export type InitiativeProps = {
  initiative?:InitiativePublicByPkQuery['initiative']
}

export default function PostThread({post}:PostPageQuery) {
  const { id } = useRouter().query;
  const user = useUserData()
  const router = useRouter()
  const layout = useLayout()
  const [,setVisible] = useRecoilState(Sidebar.visible)

  useEffect(()=>{
    if(layout==='mobile'){
      setVisible(false)
    }else{
      setVisible(true)
    }
    return ()=>setVisible(true)
  },[layout])
  
  return (post && !post?.id)? 
    <Redirect to='/'/>  :(
    <Container>
      {layout==='desktop'?
        <Body>
          <Text button
            onClick={()=>{
              router.push({
                pathname: '/initiative/[id]', 
                query: { id }
              }, `/initiative/${id}`, { 
                locale: router.locale 
              }) 
            }}
            s="t5" 
            position='absolute' 
            top='5rem' 
            left='8rem'>
              <ArrowLeft/>Back
          </Text>
          <CenterColumn>
            <Feed {...{post}}/>
          </CenterColumn>
        </Body>:
        <>
          <Feed {...{post}}/>
        </>}
    </Container>
  )
}
