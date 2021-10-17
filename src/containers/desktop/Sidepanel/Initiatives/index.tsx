import { useI18n, useUser } from 'common';
import { UserIconRow } from "../styles";
import { useEffect } from "react";
import AuthenticatedUser from "./AuthenticatedUser";
import AnonimousUser from "./AnonimousUser"

export default function Initiatives(){
  const user = useUser()

  return user? <AuthenticatedUser />: <AnonimousUser/>
}