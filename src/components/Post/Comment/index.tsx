import { IComment } from "./IComment";
import { Container } from "../styles";
import Author from "../Author";
import { Actions, Footer, Likes, Reply, Time , Content, Message, Info} from "./styles";
import IconButton from "components/IconButton";
import Button from "components/Button";
import {ReactComponent as Like} from 'assets/icons/like.svg'

export interface ICommentProps extends IComment {}

function Comment({author, message, likesCount, date}:ICommentProps) {
    const handleLike  = (e: any) => {
        console.log("like");
    }
    return  (
        <Container>
        <Author {...author}/>
        <Content>
           <Message>{message}</Message>
            <Footer>
                <Info>
                    <Time>{date.getHours().toString()}</Time>
                    <Likes>Подобається: {likesCount}</Likes>

                    
                </Info>
                <Button label='Відповісти'  customType='text'/>
                <Actions>
                   
                    <Like onClick={handleLike}/>
                </Actions>
            </Footer>
           
       </Content>
      
   </Container>
    )
   
}

export default Comment;