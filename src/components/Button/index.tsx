import { IButton } from "./IButton";
import {  CustomButton } from "./styles";
import {ReactComponent as SendIco} from 'assets/icons/arrow-up-2.svg'
import {ReactComponent as VoteIco} from 'assets/icons/vote.svg'

//'primary'  |  'secondary' |  'subtle' |  'text'

export  interface IButtonProps extends IButton  {
    onClick?: () => void;
}



function Button({
    customType = 'primary',
    customSize =  'medium',
    label =  'Button',
    isDisabled = false,
    onClick,
    icon
} : IButtonProps) {
    return(
        <CustomButton
            {...{customType, customSize,isDisabled, icon}}
        > 
        {icon&& 
            {
                'send': <SendIco/>,
                'vote': <VoteIco/>,
                'upload': <VoteIco/>
            }[icon]
        }
        {label}
        </CustomButton>
           
        
    )
}

export default  Button;