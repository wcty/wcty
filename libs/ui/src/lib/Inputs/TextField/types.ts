import { MutableRefObject, ChangeEvent, TextareaHTMLAttributes, InputHTMLAttributes } from "react";
import { LayoutProps, PositionProps, SpaceProps } from 'styled-system'
import { IEmojiData } from 'emoji-picker-react';
import { MouseEventHandler } from "react";

export enum File_Types_Enum {
  Document = 'document',
  Image = 'image'
}

export type UploadedImage = {
  downloadable_url?: string | null | undefined;
  type?: File_Types_Enum;
  id?: any;
}

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export type UploaderOptions = {
  createRecord?:boolean, 
  multiple?:boolean,
}

export type ImageType = {
  url: string,
  width: number,
  height: number
}

export type CSSImageType = {
  url: string,
  width: number|string,
  height: number|string
}

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  inputRef?: MutableRefObject<HTMLInputElement>
}

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  inputRef?: MutableRefObject<HTMLTextAreaElement>
}

export type TextInputsProps = SpaceProps & LayoutProps & PositionProps & { 
  withCancel?: boolean, 
  withImage?: boolean, 
  onImageSubmit?: (
    e:ChangeEvent<HTMLInputElement>, 
    options: UploaderOptions
  ) => void,
  onImageClick?: MouseEventHandler<HTMLLabelElement>,
  imageDisabled?: boolean,
  withEmoji?: boolean, 
  onEmojiClick?: (event: React.MouseEvent, data: IEmojiData)=>void, 
  emojiOpen?: boolean,
  setEmojiOpen?: (value: boolean)=>void,
  extendable?: boolean,
  images?: string[],
  deleteImage?: (
    index: number, 
    options?: {
      id?: string
    })=>void,
  disabled?: boolean,
  onChange?: (e:ChangeEvent<HTMLInputElement>)=>void,
  uploadedImages?: UploadedImage[]
}
