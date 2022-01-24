import {ReactComponent as SendIco} from '@assets/icons/arrow-up-2.svg'
import {ReactComponent as VoteIco} from '@assets/icons/vote.svg'
import {ReactComponent as LikeIco} from '@assets/icons/like.svg'
import {ReactComponent as ArrowLeft} from '@assets/icons/arrow-left.svg'
import {ReactComponent as ArrowRight} from '@assets/icons/arrow-right.svg'
import { Container } from "./styles";

const variants = {
  'send': <SendIco/>,
  'vote': <VoteIco/>,
  'upload': <VoteIco/>,
  'like': <LikeIco/>,
  'arrow-left': <ArrowLeft/>,
  'arrow-right': <ArrowRight/>,
}

export interface  IIconButtonProps {
    onClick?: (e:any) => void 
    icon?: keyof typeof variants;
    size?: 'small' |  'medium' |  'large'
}

export function IconButton({icon = 'send', size = 'medium', onClick}: IIconButtonProps) {

    return (
        <Container {...{icon, size,  onClick}}>
            { variants[icon] }
        </Container>
    )
}

