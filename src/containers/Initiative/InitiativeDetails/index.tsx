import { useUser } from "common";
import { useInitiativeByPkQuery } from "generated";
import { useParams } from "react-router-dom";
import Description from "./Description";
import Information from "./Information";
import { Images } from "./Images";

export default function InitiativeDetails({desktop=false}) {
  const {id} = useParams<{id:string}>();
  const user = useUser()
  const {data} = useInitiativeByPkQuery({variables:{id,user_id:user?.id}, fetchPolicy:"cache-only"});
  const isMember = !!data?.initiative?.members?.length

  return <>
    <Description {...{desktop}}/>
    <Information/>
    <Images/>
    <div style={{padding:'2rem'}}>{
      isMember?
      'Feed and navigation':
      'Join initiative'
    }
    </div>
  </>
}