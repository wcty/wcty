import { ChangeEvent, InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { ReactComponent as PIcon}  from '@assets/icons/create-post-icon.svg'

import { FieldWrapper, TextInput } from "./styles";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {}

export function TextField(props:TextFieldProps){
  return(
    <FieldWrapper>
      <TextInput {...props}/>
      <div>
        <button onClick={
          (e)=>{
            e.preventDefault();
            props.onChange?.({
              target:{
                value:''
              }
            } as ChangeEvent<HTMLInputElement>)
          }}>
            {/* <CancelIcon/> */}
            <PIcon/>
        </button>
      </div>
    </FieldWrapper>
  )
}