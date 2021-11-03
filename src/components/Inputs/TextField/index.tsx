import { ChangeEvent, InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { ReactComponent as CancelIcon } from 'assets/icons/cancel.svg'

import { FieldWrapper, TextAreaInput, TextInput } from "./styles";
export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {}
export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

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
            <CancelIcon/>
        </button>
      </div>
    </FieldWrapper>
  )
}

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
