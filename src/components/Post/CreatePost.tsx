import Avatar from "components/Avatar";
import { EAvatarSize } from "components/Avatar/EAvatarSize";
import TextField from "components/Inputs/TextField";
import { Container, InputContent } from "./styles";
import  SendIco from "assets/icons/send.svg";
export interface ICreatePost{}

function CreatePost(){
  return (
      <Container>
        <InputContent> 
            <Avatar size={EAvatarSize.SMALL}/>
            <TextField/>
            <img src={SendIco}  alt="send message"/>
        </InputContent>
            
          
          
      </Container>
  )
}

export default CreatePost;