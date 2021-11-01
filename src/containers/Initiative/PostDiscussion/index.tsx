
import { IPostDiscussion } from "./IPostDiscussion";
import { Comments, Container, Expander, Header, Post } from "./styles";


export interface IPostDiscussionProps extends IPostDiscussion {}


function PostDiscussion({}:IPostDiscussionProps) {
    return (
        <Container>
            <Header>
                Header
            </Header>

            <Post>
                Post
            </Post>

            <Expander>
                Expander
            </Expander>

            <Comments>
                Comments
            </Comments>
        </Container>
    )
}

export  default PostDiscussion;