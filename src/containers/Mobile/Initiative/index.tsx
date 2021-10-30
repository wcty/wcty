import { useUser } from "common";
import { useInitiativeByPkQuery } from "generated";
import { useParams } from "react-router-dom";
import { Container, FilletButton } from "./styles";
import placeholder from 'assets/images/placeholder.png'
import Header from "./Header";
import Description from "./Description";

export default function Initiative() {
  const {id} = useParams<{id:string}>();
  const user = useUser()
  const {data} = useInitiativeByPkQuery({variables:{id,user_id:user?.id}, fetchPolicy:"cache-first", nextFetchPolicy:"cache-only"});
  const isMember = !!data?.initiative?.members.length

  return (
    <Container>
      <img src={data?.initiative?.image||placeholder}/>
      <FilletButton/>
      <Header/>
      <Description/>
      <div style={{padding:'2rem'}}>{
        isMember?
        'Feed and navigation':
        'Join initiative'
      }</div>
    </Container>
  )
}