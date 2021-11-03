import { IButton } from "./IButton";
import {  CustomButton } from "./styles";
import {ReactComponent as SendIco} from 'assets/icons/arrow-up-2.svg'
import {ReactComponent as VoteIco} from 'assets/icons/vote.svg'
import { ButtonHTMLAttributes } from "react";

const variants = {
  'send': <SendIco/>,
  'vote': <VoteIco/>,
  'upload': <VoteIco/>
}
export  interface IButtonProps extends IButton, ButtonHTMLAttributes<HTMLButtonElement>  {}

function Button(props : IButtonProps) {
  const defaults = {
    customType:'primary',
    customSize: 'medium',
    label: 'Button',
    isDisabled: false
  } as IButtonProps;
    return(
      <CustomButton {...{...defaults, ...props}} > 
        {props.icon && variants[props.icon]}
        {props.label}
        {props.children}
      </CustomButton>
    )
}

export default  Button;