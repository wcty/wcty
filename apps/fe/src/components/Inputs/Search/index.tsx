
import { ISearch } from "./ISearch";
import { Container, SearchInput } from "./styles";
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg'
import { ReactComponent as CancelIcon } from 'assets/icons/cancel.svg'

export interface ISearchProps extends ISearch {

}

function Search({}: ISearchProps) {
    return(
        <Container>
            <SearchInput/>
            <div><SearchIcon/></div>
            <div><button><CancelIcon/></button></div>
        </Container>
    )
}

export  default Search;