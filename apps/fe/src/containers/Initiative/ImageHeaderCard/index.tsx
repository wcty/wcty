import { useLayout } from "common";
import { useRouter } from "next/router";
import { FilletButton, Image } from "./styles";

interface ImageProps {
  src: string
}

export default function ImageHeader(props:ImageProps){
  const router = useRouter()
  const layout = useLayout()

  return(
    <Image src={props.src}>
      {layout==='mobile' ? <FilletButton onClick={()=>router.push('/')}/>: undefined}
    </Image>
  )
}