import { useUser } from 'common';
import AuthenticatedUser from "./AuthenticatedUser";
import AnonimousUser from "./AnonimousUser"

export default function Initiatives(){
  const user = useUser()

  return user? <AuthenticatedUser />: <AnonimousUser/>
}