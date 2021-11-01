
import { IIconButton } from "./IIconButton";
import {ReactComponent as SendIco} from 'assets/icons/arrow-up-2.svg'
import {ReactComponent as VoteIco} from 'assets/icons/vote.svg'
import { Container } from "./styles";

export interface  IIconButtonProps extends  IIconButton {
    onClick?: (e: any) => void
}

function IconButton({icon = 'send', size = 'medium', onClick}: IIconButtonProps) {
    return (
        <Container {...{icon, size,  onClick}}>
            {
                {
                    'send': <SendIco/>,
                    'vote': <VoteIco/>,
                    'upload': <VoteIco/>
                }[icon]
            }
        </Container>
    )
}

export default IconButton;