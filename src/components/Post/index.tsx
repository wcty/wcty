import { IPost } from "./IPost";
import { Container } from "./styles";

export interface IPostProps extends IPost {}

function Post({author,  message}:IPostProps) {
    return(
        <Container>
            {author}
            {message}
        </Container>
    )
}

export default Post;