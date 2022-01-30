import { ChangeEvent, TextareaHTMLAttributes } from "react";
import { ReactComponent as CancelIcon } from '@assets/icons/cancel.svg'
import { ReactComponent as PIcon}  from '@assets/icons/create-post-icon.svg'

import { FieldWrapper, TextAreaInput } from "./styles";
import { ElementProps } from "common";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function TextArea(props:TextAreaProps & ElementProps & {withImage?: boolean}){
  return(
    <FieldWrapper>
      <TextAreaInput {...props}/>
      <div>
        <button onClick={
          (e)=>{
            e.preventDefault();
            props.onChange?.({
              target:{
                value:''
              }
            } as ChangeEvent<HTMLTextAreaElement>)
          }}>
            {props.withImage?<PIcon/>: <CancelIcon/>}
        </button>
      </div>
    </FieldWrapper>
  )
}
