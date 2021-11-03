import ImageHeaderCard from "components/ImageHeaderCard";
import Feed from "./Feed";
import InitiativeDetails from "./InitiativeDetails";
import { Body, Container,  LeftColumn,  RightColumn } from "./styles";
import { useHistory, useParams } from "react-router-dom";
import { useInitiativeByPkQuery } from "generated";
import { useUser } from "common";
import Header from "./Header";
import Join, { LoginToJoin } from "./Join";

function Desktop() {
  const { id } = useParams<{id:string}>();
  const user = useUser()
  const { data } = useInitiativeByPkQuery({variables:{id, user_id:user?.id}, fetchPolicy:"cache-first"});
  const isMember = !!data?.initiative?.members?.length
  console.log(data)
  return(
    <Container.Desktop>
      <ImageHeaderCard.Desktop src={data?.initiative?.image||''}/>
      <Header.Desktop/>
      <Body.Desktop>
        <LeftColumn>
          <InitiativeDetails/>
        </LeftColumn>
        <RightColumn>
          { 
            user ? (
              isMember?
              <Feed/>:
              <Join/>
            ): <LoginToJoin/> 
          }
        </RightColumn>
      </Body.Desktop>
    </Container.Desktop>
  )
}

function Mobile() {
  const { id } = useParams<{id:string}>();
  const user = useUser()
  const history = useHistory();
  const { data } = useInitiativeByPkQuery({variables:{id,user_id:user?.id}, fetchPolicy:"cache-first", nextFetchPolicy:"cache-only"});
  const isMember = !!data?.initiative?.members?.length

  return (
    <Container.Mobile>
      <ImageHeaderCard.Mobile src={data?.initiative?.image||''}/>
      <Header.Mobile/>
      <Body.Mobile>
        <InitiativeDetails/>
      </Body.Mobile>
      { 
        user ? (
          isMember?
          <Feed/>:
          <Join/>
        ): <LoginToJoin/> 
      }
    </Container.Mobile>
  )
}


export default { Desktop, Mobile };

export { default as Feed } from './Feed'
export { default as InitiativeDetails } from './InitiativeDetails'
