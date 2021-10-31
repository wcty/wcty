import ImageHeaderCard from "components/ImageHeaderCard";
import Feed from "./Feed";
import InitiativeDetails from "./InitiativeDetails";
import { Body, Container, Header,  LeftColumn,  RightColumn } from "./styles";
import { useHistory, useParams } from "react-router-dom";
import Metrics from "./Metrics";
import { useInitiativeByPkQuery } from "generated";
import { useUser } from "common";

function Desktop() {
  const { id } = useParams<{id:string}>();
  const user = useUser()
  const {data} = useInitiativeByPkQuery({variables:{id, user_id:user?.id}, fetchPolicy:"cache-first", nextFetchPolicy:"cache-only"});
  

  return(
    <Container.Desktop>
      <Header>
        <ImageHeaderCard.Desktop src={data?.initiative?.image||''} title={data?.initiative?.name||''}/>
      </Header>
      <Body>
        <LeftColumn>
          <InitiativeDetails desktop/>
        </LeftColumn>
        <RightColumn>
          {user && <Feed/>}
        </RightColumn>
      </Body>
    </Container.Desktop>
  )
}

function Mobile() {
  const { id } = useParams<{id:string}>();
  const user = useUser()
  const history = useHistory();
  const {data} = useInitiativeByPkQuery({variables:{id,user_id:user?.id}, fetchPolicy:"cache-first", nextFetchPolicy:"cache-only"});

  return (
    <Container.Mobile>
      <ImageHeaderCard.Mobile src={data?.initiative?.image||''} title={data?.initiative?.name||''}/>
      <Metrics/>
      <Header/>
      <InitiativeDetails/>
    </Container.Mobile>
  )
}


export default { Desktop, Mobile };

export { default as Feed } from './Feed'
export { default as InitiativeDetails } from './InitiativeDetails'
