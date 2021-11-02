import { FilletButton, Image } from "./styles";
import { useHistory } from "react-router-dom";

interface ImageProps {
  src: string
}

function Desktop(props:ImageProps){
  return(
    <>
      <Image.Desktop src={props.src}/>
    </>
  )
}

function Mobile(props:ImageProps){
  const history = useHistory();

  return(
    <Image.Mobile src={props.src}>
      <FilletButton onClick={()=>history.push('/')}/>
    </Image.Mobile>
  )
}

export default { Desktop, Mobile };