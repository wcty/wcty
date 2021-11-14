import ImageHeaderCard from "components/ImageHeaderCard";
import Feed from "./Feed";
import InitiativeDetails from "./InitiativeDetails";
import { Body, Container,  LeftColumn,  RightColumn } from "./styles";
import { InitiativePublicByPkQuery, useInitiativeByPkQuery } from "generated";
import { useLayout, useUser } from "common";
import Header from "./Header";
import Join, { LoginToJoin } from "./Join";
import { useRouter } from "next/router";
import Redirect from "components/Redirect";

function FeedBlock({isMember=false}) {
  const user = useUser()
  return  user ? (
      isMember?
      <Feed/>:
      <Join/>
    ): <LoginToJoin/> 
}

export type InitiativeProps = {initiative?:InitiativePublicByPkQuery['initiative']}

export default function Initiative({initiative}:InitiativeProps) {
  const { id } = useRouter().query;
  const user = useUser()
  const { data } = useInitiativeByPkQuery({variables:{id,user_id:user?.id}, fetchPolicy:"cache-first", nextFetchPolicy:"cache-only"});
  const isMember = !!data?.initiative?.members?.length
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
            <FeedBlock {...{isMember}}/>
          </RightColumn>
        </Body>:
        <>
          <Body>
            <InitiativeDetails {...{initiative}}/>
          </Body>
          <FeedBlock {...{isMember}}/>
        </>}
    </Container>
  )
}

export { default as Feed } from './Feed'
export { default as InitiativeDetails } from './InitiativeDetails'
