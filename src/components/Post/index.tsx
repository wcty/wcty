import { IPost } from "./types/IPost";
import {  Actions, CommentCounter,  Container, Content, Likes, Message, Tags, ToComment } from "./styles";
import Author from "./Author";
import CommentIco from 'assets/icons/comment.svg'
import LikeIco from 'assets/icons/like.svg'
import CreatePost from "./CreatePost";
import { FeedFragment } from "generated";
import { useParams } from "react-router-dom";
import { fixAvatar } from "common";


export interface IPostProps extends IPost {}


function Post({user, message, comments_aggregate, reactions}: FeedFragment ) {


    return(
        <Container>
          
            <Author
              avatar={fixAvatar(user?.avatar_url)}
              name={user?.display_name||''}
              date={new Date()}
            />
            <Content>
                <Message>{message}</Message>
                {/* <Tags>#{[].join(' ')}</Tags> */}
            </Content>
            <Actions> 
                <CommentCounter>
                    Коментарів: {comments_aggregate?.aggregate?.count}
                </CommentCounter>
                <ToComment>
                    <img src={CommentIco} alt="comment"/>
                    Коментувати
                </ToComment>
                <Likes>
                    {reactions.length}
                    <img src={LikeIco} alt="likes"/>
                </Likes>
            </Actions>
           
        </Container>
    )
}

export default Post;
export { CreatePost }