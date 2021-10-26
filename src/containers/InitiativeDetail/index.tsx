import Chat from "components/Chat";
import ImageHeaderCard from "components/ImageHeaderCard";
import { IPost } from "components/Post/IPost";

import { Body, Container, Header,  LeftColumn,  RightColumn } from "./styles";
const posts: IPost[] =  [
    {author:  "Marina", message: "WeCity is Cool!"},
    {author:  "Ivan", message: "WeCity  is Great!"},
    {author:  "German", message: "WeCity  is Top!"}
]

function InitiativeDetail() {

    return(
        <Container>
            <Header>
                <ImageHeaderCard/>
            </Header>
            <Body>
                <LeftColumn>
                </LeftColumn>
                <RightColumn>
                    <Chat posts={posts}/>
                </RightColumn>
            </Body>
            
        </Container>
    
    )
}

export default InitiativeDetail;
