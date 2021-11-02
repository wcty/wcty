import { useLayout } from "common";
import CreateFab from "./CreateFab";
import Search from "./Search/";
import { Wrapper } from "./styles";
import BurgerFab from "./BurgerFab";

export default function FloatPanel(){
  const layout = useLayout()
  return <Wrapper>
    {layout==='mobile' && <BurgerFab/>}
    <Search/>
    <CreateFab/>
  </Wrapper>
}