import { ChangeEvent, MutableRefObject, ReactNode, TextareaHTMLAttributes, useEffect, useState } from "react";
import { ReactComponent as CancelIcon } from '@assets/icons/cancel.svg'
import { ReactComponent as PIcon}  from '@assets/icons/create-post-icon.svg'
import { ReactComponent as SmileIcon}  from '@assets/icons/smile.svg'

import { DeleteIcon, EmojiWrapper, FieldWrapper, FileInput, IconWrapper, ImageContainer, ImageWrapper, TextAreaInput } from "./styles";
import { LayoutProps, PositionProps, SpaceProps } from 'styled-system'
import { IEmojiData } from 'emoji-picker-react';
import dynamic from "next/dynamic";

const Picker = dynamic(() => import("emoji-picker-react"), {
  ssr: false,
});

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}
type UploaderOptions = {
  createRecord?:boolean, 
  multiple?:boolean,
}

type ImageType = {
  url: string,
  width: number,
  height: number
}

type CSSImageType = {
  url: string,
  width: number|string,
  height: number|string
}

export function TextArea({
  withCancel,
  withImage,
  onImageSubmit,
  withEmoji,
  onEmojiClick,
  emojiOpen,
  setEmojiOpen,
  inputRef,
  images,
  deleteImage,
  ...props
}:TextAreaProps & SpaceProps & LayoutProps & PositionProps & { 
  withCancel?: boolean, 
  withImage?: boolean, 
  onImageSubmit?: (
    e:ChangeEvent<HTMLInputElement>, 
    options: UploaderOptions
  ) => void,
  withEmoji?: boolean, 
  onEmojiClick?: (event: React.MouseEvent, data: IEmojiData)=>void, 
  emojiOpen?: boolean,
  setEmojiOpen?: (value: boolean)=>void,
  extendable?: boolean,
  images?: string[],
  deleteImage?: (index: number)=>void,
  inputRef?: MutableRefObject<HTMLTextAreaElement>,
}){

  const [imageParams, setImageParams] = useState<CSSImageType[]>()

  useEffect(()=>{
    (async function getImageParams(){
      if(images){
        const imagesObject:ImageType[] = []

        for(let i=0; i<(images?.length||0); i++){
          const url = images?.[i]
          const imageObject:ImageType = await (new Promise((resolve, reject)=>{
            var img = new Image();
            img.onload = function(){
              resolve({
                url,
                width:img.width,
                height:img.height
              })
            }
            img.src = url||'';
          }))
          imagesObject.push(imageObject)
        }
        const max = Math.max(...imagesObject?.map(v=>v.width))
        const min = Math.min(...imagesObject?.map(v=>v.width))
        const scaled:CSSImageType[] = imagesObject?.map(v=>{
          const norm = (v.width-min)/(max-min)
          const coeff = norm/v.width
          return ({
            ...v,
            height: v.width*coeff*10 + '%',
            width: norm*10 + '%'
          })
        })
        setImageParams(scaled)
      }
    })()
  },[images])

  return(
    <FieldWrapper>
      <TextAreaInput 
        {...props} 
        rows={imageParams?.length? 1: props.rows} 
        height={imageParams?.length? '4rem': undefined} 
        ref={inputRef} />
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
      {imageParams?.length ? 
        <ImageContainer>
          {imageParams?.map((v,i)=>
            <ImageWrapper 
              key={i}
              url={v.url} 
              width={v.width}
              minHeight={v.height}
            >
              <DeleteIcon
                disabled={props.disabled}
                onClick={(e)=>{
                  e.preventDefault()
                  deleteImage?.(i);
              }} />
            </ImageWrapper>
          )}
        </ImageContainer>: null }
      {withImage && 
        <FileInput disabled={props.disabled} $value={''} $onInputChange={(e:any)=>onImageSubmit?.(e, { createRecord:true, multiple: true })}>
          <IconWrapper  as='div' position='absolute' right='2rem' bottom='1rem'>
            <PIcon/>
          </IconWrapper>
        </FileInput>}
      {withEmoji && 
        <IconWrapper disabled={props.disabled} onClick={()=>setEmojiOpen?.(true)} position='absolute' right='5rem' bottom='1rem'>
          <SmileIcon/>
        </IconWrapper>}
      {withEmoji && emojiOpen && <EmojiWrapper>
        {onEmojiClick && <Picker onEmojiClick={(e,d)=>{onEmojiClick?.(e,d); setEmojiOpen?.(false)}} />}
      </EmojiWrapper>}
    </FieldWrapper>
  )
}
