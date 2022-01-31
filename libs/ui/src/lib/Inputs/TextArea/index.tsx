import { ChangeEvent, MutableRefObject, ReactNode, TextareaHTMLAttributes, useEffect, useState } from "react";
import { ReactComponent as CancelIcon } from '@assets/icons/cancel.svg'
import { ReactComponent as PIcon}  from '@assets/icons/create-post-icon.svg'
import { ReactComponent as SmileIcon}  from '@assets/icons/smile.svg'

import { EmojiWrapper, FieldWrapper, IconWrapper, TextAreaInput } from "./styles";
import { LayoutProps, PositionProps, SpaceProps } from 'styled-system'
import { IEmojiData } from 'emoji-picker-react';
import dynamic from "next/dynamic";

const Picker = dynamic(() => import("emoji-picker-react"), {
  ssr: false,
});

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function TextArea({
  withCancel,
  withImage,
  withEmoji,
  onEmojiClick,
  emojiOpen,
  setEmojiOpen,
  inputRef,
  ...props
}:TextAreaProps & SpaceProps & LayoutProps & PositionProps & { 
  withCancel?: boolean, 
  withImage?: boolean, 
  withEmoji?: boolean, 
  onEmojiClick?: (event: React.MouseEvent, data: IEmojiData)=>void, 
  emojiOpen?: boolean,
  setEmojiOpen?: (value: boolean)=>void,
  extendable?: boolean,
  inputRef?: MutableRefObject<HTMLTextAreaElement>,
}){

  return(
    <FieldWrapper>
      <TextAreaInput {...props} ref={inputRef}/>
      <div>
        {withCancel &&<button onClick={
          (e)=>{
            e.preventDefault();
            props.onChange?.({
              target:{
                value:''
              }
            } as ChangeEvent<HTMLTextAreaElement>)
          }}>
            <CancelIcon/>
        </button> }
      </div>
      {withImage && 
        <IconWrapper position='absolute' right='1rem' bottom='1rem'>
          <PIcon/>
        </IconWrapper>}
      {withEmoji && 
        <IconWrapper onClick={()=>setEmojiOpen?.(true)} position='absolute' right='3.2rem' bottom='1.2rem'>
          <SmileIcon/>
        </IconWrapper>}
      {withEmoji && emojiOpen && <EmojiWrapper>
        {onEmojiClick && <Picker onEmojiClick={(e,d)=>{onEmojiClick?.(e,d); setEmojiOpen?.(false)}} />}
      </EmojiWrapper>}
    </FieldWrapper>
  )
}
