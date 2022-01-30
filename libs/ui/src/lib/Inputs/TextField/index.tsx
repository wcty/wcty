import { ChangeEvent, KeyboardEventHandler, InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { ReactComponent as PIcon}  from '@assets/icons/create-post-icon.svg'
import { ReactComponent as CancelIcon } from '@assets/icons/cancel.svg'

import { FieldWrapper, TextInput } from "./styles";
import { ElementProps } from "common";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {}

export function TextField(props:TextFieldProps & ElementProps & { withImage?: boolean } ){

  return(
    <FieldWrapper>
      <TextInput {...props}/>
      <div>
        <button 
          onClick={
          (e)=>{
            e.preventDefault();
            props.onChange?.({
              target:{
                value:''
              }
            } as ChangeEvent<HTMLInputElement>)
          }}>
             {props.withImage?<PIcon/>: <CancelIcon/>}
            <PIcon/>
        </button>
      </div>
    </FieldWrapper>
  )
}