import Post, { CreatePost } from "components/Post";
import { IPost } from "components/Post/IPost";
import { Container } from "./styles";

export interface IFeedProps {
    posts:  IPost[];
}

function Feed({posts}:IFeedProps) {
    return(
        <Container>
            <CreatePost>
                
            </CreatePost>
           
            {
                posts.map
                ((post,  key) =>  <Post  {...post} key={key}/>)
            }
          
        </Container>
    )
}

export default Feed;