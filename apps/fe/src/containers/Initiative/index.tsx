import ImageHeaderCard from "./ImageHeaderCard";
import Feed from "./Feed";
import InitiativeDetails from "./InitiativeDetails";
import { Body, Container,  LeftColumn,  RightColumn } from "./styles";
import { InitiativePublicByPkQuery, useInitiativeByPkQuery } from "generated";
import { useLayout, useUser } from "common";
import Header from "./Header";
import Redirect from "components/Redirect";
import React from "react";
import { useRouter } from "next/router";

export type InitiativeProps = {initiative?:InitiativePublicByPkQuery['initiative']}

export default function Initiative({initiative}:InitiativeProps) {
  const { id } = useRouter().query;
  const user = useUser()
  const { data } = useInitiativeByPkQuery({variables:{id:initiative?.id,user_id:user?.id}, fetchPolicy:"cache-first", nextFetchPolicy:"cache-only"});
  const isMember = !!data?.initiative?.isMember?.length
  const isOnlyMember = data?.initiative?.members_aggregate.aggregate?.count === 1

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
            <Feed {...{isMember}}/>
          </RightColumn>
        </Body>:
        <>
          <Body>
            <InitiativeDetails {...{initiative}}/>
          </Body>
          <Feed {...{isMember, initiative}}/>
        </>}
    </Container>
  )
}

export { default as Feed } from './Feed'
export { default as InitiativeDetails } from './InitiativeDetails'
