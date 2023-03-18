import Information from "./Information";
import { Images } from "./Images";
import { InitiativePublicByPkQuery } from "generated";

export default function InitiativeDetails(props:{initiative?:InitiativePublicByPkQuery['initiative']}) {

  return <>
    <Information {...props}/>
    <Images {...props}/>
  </>
}