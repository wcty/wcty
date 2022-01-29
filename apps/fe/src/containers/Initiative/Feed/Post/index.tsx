import { IPost } from "./types/IPost";
import {  Actions, CommentCounter,  Container, Content, LikeCounter, Likes, Message, Tags, ToComment } from "./styles";
import Author from "./Author";
import CommentIco from '@assets/icons/comment.svg'
import { ReactComponent as LikeIco} from '@assets/icons/like.svg'
import { FeedFragment, Reactions_Enum, useReactionToPostMutation } from "generated";
import { fixAvatar, useUser } from "common";

function Post(props: FeedFragment ) {
    const {user: author, id: post_id, message, comments_aggregate, reactions} = props;
    console.log(props)
    const user = useUser();
    const [likePost] = useReactionToPostMutation({variables:{ user_id: user?.id, post_id, reaction: Reactions_Enum.Like}});
    const isReactionNotExistForCurrentUser = reactions.find(reaction => reaction.user_id ===  user?.id) === undefined;
    return(
        <Container>
          
            <Author
              avatar={fixAvatar(author?.avatar_url)}
              name={author?.display_name||''}
              date={new Date()}
            />
            <Content>
                <Message>{message?.replaceAll('\\n', `
                `)}</Message>
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
                    <LikeCounter>{reactions.length}</LikeCounter>
                    <LikeIco onClick={()=> isReactionNotExistForCurrentUser &&likePost()}/>
                </Likes>
            </Actions>
           
        </Container>
    )
}
export interface IPostProps extends IPost {}
export default Post;
// export { CreatePost }