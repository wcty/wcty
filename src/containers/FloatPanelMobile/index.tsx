import BurgerFab from "./BurgerFab";
import CreateFab from "./CreateFab";
import Search from "./Search/";
import { Wrapper } from "./styles";

export default function FloatPanel(){

  return (
    <Wrapper>
      <BurgerFab/>
      <Search/>
      <CreateFab/>
    </Wrapper>
  )
}