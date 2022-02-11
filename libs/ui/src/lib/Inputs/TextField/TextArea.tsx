import { useState } from "react";
import { TextAreaInput } from "../styles";
import { FieldsWrapper } from "./FieldWrapper";
import { TextInputsProps, CSSImageType, TextAreaProps, UploadedImage } from './types';



export function TextArea(props: TextInputsProps & TextAreaProps){
  const {
    withCancel,
    withImage,
    onImageSubmit,
    onImageClick,
    imageDisabled,
    withEmoji,
    onEmojiClick,
    emojiOpen,
    setEmojiOpen,
    inputRef,
    images,
    deleteImage,
    commentStyle,
    ...params
  } = props;

  const [imageParams, setImageParams] = useState<CSSImageType[]>([])
  const [uploads, setUploads] = useState<(CSSImageType & UploadedImage)[]>([])

  return (
    <FieldsWrapper {...{...props, imageParams, setImageParams, uploads, setUploads}}>
      <TextAreaInput 
        {...params} 
        rows={(imageParams?.length || uploads.length)? 1: props.rows} 
        height={(imageParams?.length || uploads.length)? '4rem': undefined} 
        ref={inputRef} />
    </FieldsWrapper> 
  )
}
