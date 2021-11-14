import Description from "./Description";
import Information from "./Information";
import { Images } from "./Images";
import ClientOnly from "components/ClientOnly";

export default function InitiativeDetails() {

  return <>
    <ClientOnly>
      <Description/>
    </ClientOnly>
    <Information/>
    <Images/>
  </>
}