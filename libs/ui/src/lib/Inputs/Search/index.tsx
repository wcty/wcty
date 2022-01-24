
import { Container, SearchInput } from "./styles";
import { ReactComponent as SearchIcon } from '@assets/icons/search.svg'
import { ReactComponent as CancelIcon } from '@assets/icons/cancel.svg'

export function Search({}) {
    return(
        <Container>
            <SearchInput/>
            <div><SearchIcon/></div>
            <div><button><CancelIcon/></button></div>
        </Container>
    )
}
