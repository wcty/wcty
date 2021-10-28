import { IPost } from "./IPost";
import { Author, Avatar, CommentCounter, Comments, Container, Content, Date, Info, Likes, Message, Name, Roles, Tags, ToComment } from "./styles";
import UserIcon from 'assets/icons/user.svg'
import CommentIco from 'assets/icons/comment.svg'
import LikeIco from 'assets/icons/like.svg'

export interface IPostProps extends IPost {}

function Post({author,  message, comments, likes, avatar, roles, date, tags}:IPostProps) {
    return(
        <Container>
            <Author>
                <Avatar>
                    <img src={UserIcon} alt="user"/>
                </Avatar>
                <Info>
                    <Name>{author}</Name>
                    <Roles>{roles?.join()}</Roles>
                    <Date>{date}</Date>
                </Info>
                
            </Author>
            <Content>
                <Message>
                {message}
                </Message>
                <Tags>#{tags?.map(tag => `${tag} `)}</Tags>
                <Comments>
                    <CommentCounter>
                        Коментарів: {comments.length}
                    </CommentCounter>
                    
                    <ToComment>
                        <img src={CommentIco} alt="comment"/>
                        Коментувати
                    </ToComment>
                    <Likes>
                        {likes.length}
                        <img src={LikeIco} alt="likes"/>
                    </Likes>
                </Comments>
            </Content>
           
        </Container>
    )
}

export default Post;