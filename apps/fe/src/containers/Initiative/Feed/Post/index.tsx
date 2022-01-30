import { IPost } from "./types/IPost";
import {  Actions, CommentCounter,  Container, Content, LikeCounter, Likes, Message, Tags, ToComment } from "./styles";
import Author from "./Author";
import { ReactComponent as CommentIco } from '@assets/icons/comment.svg'
import { ReactComponent as LikeIco} from '@assets/icons/like.svg'
import { FeedFragment, Reactions_Enum, useReactionToPostMutation, useDeleteLikeMutation } from "generated";
import { fixAvatar, useUser } from "common";
import { Trans } from "@lingui/macro";
import { Button } from "@ui";

function Post(props: FeedFragment ) {
    const {user: author, id: post_id, message, comments_aggregate, reactions} = props;
    const user = useUser();
    const [deleteLike] = useDeleteLikeMutation({variables:{ user_id: user?.id, post_id }});
    const [likePost] = useReactionToPostMutation({variables:{ user_id: user?.id, post_id, reaction: Reactions_Enum.Like}});
    const liked = !!reactions.find(reaction => reaction.user_id ===  user?.id);
    
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
                  <Trans>Comments:</Trans> {comments_aggregate?.aggregate?.count}
                </CommentCounter>
                <Button customType="text" size="small">
                    <CommentIco/>
                    <Trans>Comment</Trans>
                </Button>
                <Likes liked={liked}>
                    <LikeCounter>{reactions.length}</LikeCounter>
                    <LikeIco onClick={()=>liked? deleteLike(): likePost() }/>
                </Likes>
            </Actions>
        </Container>
    )
}
export interface IPostProps extends IPost {}
export default Post;
// export { CreatePost }