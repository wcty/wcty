import { ChangeEvent, TextareaHTMLAttributes } from "react";
import { ReactComponent as CancelIcon } from '@assets/icons/cancel.svg'
import { ReactComponent as PIcon}  from '@assets/icons/create-post-icon.svg'

import { FieldWrapper, TextAreaInput } from "./styles";
import { LayoutProps, PositionProps } from 'styled-system'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function TextArea(props:TextAreaProps & LayoutProps & PositionProps &{ withImage?: boolean, extendable?: boolean }){
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
