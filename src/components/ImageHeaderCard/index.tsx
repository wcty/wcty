import { Actions, Buttons, Content, FilletButton, Icons, Image, Title } from "./styles";
import Button from "components/Button";
import { EButtonTypes } from "components/Button/styles";
import { useHistory, useParams } from "react-router-dom";
import { useUser } from "common";

interface ImageProps {
  src: string
  title: string
}

function Desktop(props:ImageProps){
  return(
    <>
      <Image src={props.src}/>
      <Content>
        <Title>
          {props.title}
        </Title>
        <Actions>
          <Icons>
          </Icons>
          <Buttons>
            <Button />
            <Button type={EButtonTypes.SECONDARY}/>
          </Buttons>
        </Actions>
      </Content>
    </>
  )
}

function Mobile(props:ImageProps){
  const { id } = useParams<{id:string}>();
  const user = useUser()
  const history = useHistory();

  return(
    <>
      <img src={props.src}/>
      <FilletButton onClick={()=>history.push('/')}/>
    </>
  )
}

export default { Desktop, Mobile };