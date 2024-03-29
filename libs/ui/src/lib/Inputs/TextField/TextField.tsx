import { useState } from "react";
import { TextInput } from "../styles";
import { FieldsWrapper } from "./FieldWrapper";
import { TextInputsProps, TextFieldProps, CSSImageType, UploadedImage } from './types';


export function TextField(props: TextInputsProps & TextFieldProps ){
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
    commentStyle,
    deleteImage,
    ...params
  } = props;

  const [imageParams, setImageParams] = useState<CSSImageType[]>([])
  const [uploads, setUploads] = useState<(CSSImageType & UploadedImage)[]>([])

  return (
    <FieldsWrapper {...{...props, imageParams, setImageParams, uploads, setUploads}}>
      <TextInput 
        {...params} 
        height={(imageParams?.length || uploads.length)? '4rem': undefined} 
        ref={inputRef} />
    </FieldsWrapper> 
  )
}