import { useLayout } from "common";
import CreateFab from "./CreateFab";
import Search from "./Search/";
import { Wrapper } from "./styles";
import BurgerFab from "./BurgerFab";
import { useHistory } from "react-router-dom";

export default function FloatPanel(){
  const layout = useLayout()
  const history = useHistory()
  const isEntryCreation = history.location.pathname.includes('/create-initiative')

  return <Wrapper>
    {layout==='mobile' && <BurgerFab/>}
    {!isEntryCreation &&<>
      <Search/>
      <CreateFab onClick={()=>history.push('/create-initiative')}/>
    </>}
  </Wrapper>
}