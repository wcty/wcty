import { ChangeEvent, TextareaHTMLAttributes } from "react";
import { ReactComponent as CancelIcon } from '@assets/icons/cancel.svg'

import { FieldWrapper, TextAreaInput } from "./styles";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function TextArea(props:TextAreaProps){
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
            <CancelIcon/>
        </button>
      </div>
    </FieldWrapper>
  )
}
