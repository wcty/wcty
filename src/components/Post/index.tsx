import { IPost } from "./types/IPost";
import {  Actions, CommentCounter,  Container, Content, Likes, Message, Tags, ToComment } from "./styles";
import Author from "./Author";
import CommentIco from 'assets/icons/comment.svg'
import LikeIco from 'assets/icons/like.svg'
import CreatePost from "./CreatePost";


export interface IPostProps extends IPost {}

function Post({author,  message, comments, likes, tags}:IPostProps) {
    return(
        <Container>
            <Author {...author}/>
            <Content>
                <Message>{message}</Message>
                <Tags>#{tags?.join(' ')}</Tags>
            </Content>
            <Actions> 
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
            </Actions>
           
        </Container>
    )
}

export default Post;
export { CreatePost }