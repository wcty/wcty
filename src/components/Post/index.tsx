import { IPost } from "./IPost";
import { Author, Avatar, CommentCounter, Comments, Container, Content, Date, Info, Message, Name, Roles, Tags, ToComment } from "./styles";
import UserIcon from 'assets/icons/user.svg'
import CommentIco from 'assets/icons/comment.svg'

export interface IPostProps extends IPost {}

function Post({author,  message}:IPostProps) {
    return(
        <Container>
            <Author>
                <Avatar>
                    <img src={UserIcon} alt="user"/>
                </Avatar>
                <Info>
                    <Name>Анатолій Бойко</Name>
                    <Roles>Спеціаліст, волонтер, інвестор</Roles>
                    <Date> 5 серпня 2020</Date>
                </Info>
                
            </Author>
            <Content>
                <Message>
                Всім привіт! Я майстер і готовий встановити або зробити лаву.
                </Message>
                <Tags>#розроблення-проєкту</Tags>
                <Comments>
                    <CommentCounter>
                        Коментарів: 10
                    </CommentCounter>
                    <ToComment>
                        <img src={CommentIco} alt="user"/>
                        Коментувати
                    </ToComment>
                </Comments>
            </Content>
           
        </Container>
    )
}

export default Post;