import { useUser } from "common";
import Feed from "./Feed";
import ClientOnly from "components/ClientOnly";
import Join, { LoginToJoin } from "../Join";

function FeedBlock({isMember=false}) {
  const user = useUser()
  
  return  user ? (
      isMember?
        <ClientOnly>
          <Feed/>
        </ClientOnly>:
        <Join/>
    ): <LoginToJoin/> 
}


export default FeedBlock;