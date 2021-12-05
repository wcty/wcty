import { Fab } from "./styles";
import { ReactComponent as Burger } from 'assets/icons/burger.svg'
import { useRecoilState } from "recoil";
import Sidebar from "containers/Sidepanel";

export default function BurgerFab(){
  
  const [,setSidebar] = useRecoilState(Sidebar.open)

  return <Fab onClick={()=>setSidebar('menu')}>
    <Burger/>
  </Fab>
}