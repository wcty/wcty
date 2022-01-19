import Description from "./Description";
import Information from "./Information";
import { Images } from "./Images";
import { InitiativePublicByPkQuery } from "generated";

export default function InitiativeDetails(props:{initiative?:InitiativePublicByPkQuery['initiative']}) {

  return <>
    <Description {...props}/>
    <Information {...props}/>
    <Images {...props}/>
  </>
}