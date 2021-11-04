import { IBaseComment, IComment } from "./IComment";
import { Container } from "../styles";
import Author from "../Author";
import { Actions, Footer, Likes,  Time , Content, Message, Info, Offset} from "./styles";
import Button from "components/Button";
import {ReactComponent as Like} from 'assets/icons/like.svg'

export interface ICommentProps extends IComment {}

function  BaseComment({author, message, likesCount, date}:IBaseComment) {
    const handleLike  = (e: any) => {
        console.log("like");
    }
    return  (
    <>
        <Author {...author}/>
        <Content>
           <Message>{message}</Message>
            <Footer>
                <Info>
                    <Time>{date.getHours().toString()}</Time>
                    <Likes>Подобається: {likesCount}</Likes>

                    
                </Info>
                <Button size='medium' customType="text">Відповісти</Button>
                <Actions>
                    <Like onClick={handleLike}/>
                </Actions>
            </Footer>
           
       </Content>
      
    </>
    )

}

function Comment({author, message, likesCount, date, comments}:ICommentProps) {

    return (
        <Container>
             <BaseComment {...{author, message, likesCount, date}}/>
             <Offset>
             {
                 comments?.map(
                     (comment, i) =>  <BaseComment key ={i} {...comment}/>
                 )
             }
             </Offset>
        </Container>
       
    )
   
   
}

export default Comment;