import Avatar from "components/Avatar";
import { EAvatarSize } from "components/Avatar/EAvatarSize";
import TextField from "components/Inputs/TextField";
import { Actions, Channels, Chip, Container, CreateVote, InputContent } from "./styles";
import  SendIco from "assets/icons/send.svg";
import Button from "components/Button";
import { EButtonTypes } from "components/Button/styles";

import VoteIcon from "assets/icons/vote.svg";

const channels = ['збір-коштів', 'Голосування','Розробкапроєкту'];

export interface ICreatePostProps{}

function CreatePost({}:ICreatePostProps){
  return (
      <Container>
        <InputContent> 
            <Avatar size={'small'}/>
            <TextField/>
            <img src={SendIco}  alt="send message"/>
        </InputContent>
        <Actions>
          <Channels>
            Канали: {
              channels.map((channel, i) => <Chip key={i}>#{channel}</Chip>)
            }
          </Channels>
          <CreateVote>
            
            <img src ={VoteIcon} alt="votes"/>
            <Button type={EButtonTypes.TEXT} label='Створити голосування'/>
          </CreateVote>
        </Actions>
      </Container>
  )
}

export default CreatePost;