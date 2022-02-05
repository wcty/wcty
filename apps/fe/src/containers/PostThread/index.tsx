import Feed from "./Feed";
import { ArrowLeft, Body, CenterColumn, Container } from "./styles";
import { InitiativePublicByPkQuery, PostPageQuery, useInitiativeByPkQuery } from "generated";
import { useLayout, useUser } from "common";
import Redirect from "components/Redirect";
import React from "react";
import { useRouter } from "next/router";
import { Text } from "@ui";

export type InitiativeProps = {
  initiative?:InitiativePublicByPkQuery['initiative']
}

export default function PostPage({post}:PostPageQuery) {
  const { id } = useRouter().query;
  const user = useUser()
  const router = useRouter()
  const layout = useLayout()
  
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
            customSize="t5" 
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
