import ImageHeaderCard from "./ImageHeaderCard";
import InitiativeDetails from "./InitiativeDetails";
import { Body, Container,  LeftColumn,  RightColumn } from "./styles";
import { InitiativePublicByPkQuery, useInitiativeByPkQuery } from "generated";
import { useLayout, useUser } from "common";
import Header from "./Header";
import Redirect from "components/Redirect";
import React from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const Feed = dynamic(() => import("./Feed"), { ssr: false });

export type InitiativeProps = {initiative?:InitiativePublicByPkQuery['initiative']}

export default function Initiative({initiative}:InitiativeProps) {
  const { id } = useRouter().query;
  const user = useUser()

  const layout = useLayout()
  
  return (initiative && !initiative?.id)? 
    <Redirect to='/'/>  :(
    <Container>
      <ImageHeaderCard src={initiative?.image||''}/>
      <Header {...{initiative}}/>
      {layout==='desktop'?
        <Body>
          <LeftColumn>
            <InitiativeDetails {...{initiative}}/>
          </LeftColumn>
          <RightColumn>
            <Feed {...{initiative}}/>
          </RightColumn>
        </Body>:
        <>
          <Body>
            <InitiativeDetails {...{initiative}}/>
          </Body>
          <Feed {...{initiative}}/>
        </>}
    </Container>
  )
}

export { default as Feed } from './Feed'
export { default as InitiativeDetails } from './InitiativeDetails'
