import Post, { CreatePost } from "components/Post";
import { IPost } from "components/Post/types/IPost";
import { CheckedChannels, Container, Footer } from "./styles";
const checkedChannels = ['збір-коштів','Розробкапроєкту'];
export interface IFeedProps {
    posts:  IPost[];
}

function Feed({posts}:IFeedProps) {
    return(
        <Container>
            <CheckedChannels>
                {
                    checkedChannels.map((channel, i) => `#${channel}`)
                }
            </CheckedChannels>
            <CreatePost>
                
            </CreatePost>
           
            {
                posts.map
                ((post,  key) =>  <Post  {...post} key={key}/>)
            }
            <Footer>
                <div>5 серпня 2020, 10:27 </div>
                <div>Ольга створила/ив ініціативу</div>
            </Footer>
        </Container>
    )
}

export default Feed;