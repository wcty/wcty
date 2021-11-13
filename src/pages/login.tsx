import { useLayout } from "common"
import Login from "containers/Login"
import Sidepanel from "containers/Sidepanel"


export default function LoginRoute() {
  const layout = useLayout()

  return <>
    <Login/>
    {layout==='mobile'&& <Sidepanel/>}
  </>
}