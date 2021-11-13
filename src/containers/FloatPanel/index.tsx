import { useLayout } from "common";
import CreateFab from "./CreateFab";
import Search from "./Search/";
import { Wrapper } from "./styles";
import BurgerFab from "./BurgerFab";
import { useRouter } from "next/router";

export default function FloatPanel(){
  const layout = useLayout()
  const router = useRouter()
  const isEntryCreation = router.pathname.includes('/create-initiative')

  return <Wrapper>
    {layout==='mobile' && <BurgerFab/>}
    {!isEntryCreation &&<>
      <Search/>
      <CreateFab onClick={()=>router.push('/create-initiative')}/>
    </>}
  </Wrapper>
}