import CreateFab from "./CreateFab";
import Search from "./Search/";
import { Wrapper } from "./styles";

export function FloatPanel(){

  return <Wrapper>
    <Search/>
    <CreateFab/>
  </Wrapper>
}