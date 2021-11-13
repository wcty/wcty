import { useRouter } from "next/router";
import { FilletButton, Image } from "./styles";

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
  const router = useRouter()

  return(
    <Image.Mobile src={props.src}>
      <FilletButton onClick={()=>router.push('/')}/>
    </Image.Mobile>
  )
}

export default { Desktop, Mobile };