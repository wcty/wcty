import { IPost } from "./IPost";
import { Author, Avatar, Container, Message, Name, Roles } from "./styles";
import UserIcon from 'assets/icons/user.svg'

export interface IPostProps extends IPost {}

function Post({author,  message}:IPostProps) {
    return(
        <Container>
            <Author>
                <Avatar>
                    <img src={UserIcon} alt="user"/>
                </Avatar>
                <Name></Name>
                <Roles></Roles>
            </Author>
            <Message>
            Всім привіт! Я майстер і готовий встановити або зробити лаву.
            </Message>
        </Container>
    )
}

export default Post;