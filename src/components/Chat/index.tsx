import Post, { IPostProps } from "components/Post";
import { IPost } from "components/Post/IPost";
import { Container } from "./styles";

export interface IChatProps {
    posts:  IPost[];
}

function Chat({posts}:IChatProps) {
    return(
        <Container>
            {
                posts.map((post,  key) =>  <Post  {...post}/>)
            }
        </Container>
    )
}

export default Chat;