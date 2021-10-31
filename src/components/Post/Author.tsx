import { AuthorContainer} from "./styles";
import { IAuthor } from "./types/IAuthor";
import Avatar from "components/Avatar";
import UserInfo from "./UserInfo";

export interface IAuthorProps extends IAuthor {} 

function Author({avatar, name, roles, date}: IAuthorProps) {
    return (
        <AuthorContainer>
             <Avatar picture={avatar}/>
             <UserInfo name={name} roles={roles} date={date}/>
        </AuthorContainer>
    )
}

export default Author;