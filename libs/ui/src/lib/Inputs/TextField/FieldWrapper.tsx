import { ReactComponent as PIcon}  from '@assets/icons/create-post-icon.svg'
import { ReactComponent as CancelIcon } from '@assets/icons/cancel.svg'
import { ReactComponent as SmileIcon}  from '@assets/icons/smile.svg'
import { MutableRefObject, ChangeEvent, useEffect,  ReactNode } from "react";
import { DeleteIcon, EmojiWrapper, FieldWrapper, FileInput, IconWrapper, ImageContainer, ImageWrapper } from "../styles";
import { TextInputsProps,  CSSImageType, ImageType, UploadedImage } from './types';
import dynamic from 'next/dynamic';

const Picker = dynamic(() => import("emoji-picker-react"), {
  ssr: false,
});

export function FieldsWrapper(
  props:TextInputsProps & {
    imageParams: CSSImageType[]
    setImageParams: (value: CSSImageType[])=>void,
    children: ReactNode,
    inputRef?: MutableRefObject<HTMLTextAreaElement> | MutableRefObject<HTMLInputElement>,
    uploads: (CSSImageType & UploadedImage)[],
    setUploads: (value: (CSSImageType & UploadedImage)[] )=>void
  }
){

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
    children,
    imageParams, 
    setImageParams,
    uploadedImages,
    uploads, 
    setUploads,
    commentStyle,
    ...params
  } = props;

  async function getImageParams(imageUrls:string[]){
      const imagesObject:ImageType[] = []

      for(let i=0; i<(imageUrls?.length||0); i++){
        const url = imageUrls?.[i]
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

      return scaled;
  }

  useEffect(()=>{
    (async()=>{
      const v = await getImageParams(images||[])
      setImageParams(v)
    })()
  },[images])

  useEffect(()=>{
    (async()=>{
      const urls = uploadedImages?.map(v=>v.downloadable_url) as string[]
      const val = await getImageParams(urls)
      const out = val.map((v,i)=>({
        ...v,
        ...uploadedImages?.[i]
      }))
      setUploads(out)
    })()
  },[uploadedImages])

  return(
    <FieldWrapper {...{commentStyle}}>

      {children}
      <div>
      {withCancel && <button onClick={
        (e)=>{
          e.preventDefault();
          params.onChange?.({
            target:{
              value:''
            }
          } as ChangeEvent<HTMLInputElement>)
        }}>
          <CancelIcon/>
      </button> }
      </div>
      {(imageParams?.length || uploads?.length) ? 
        <ImageContainer>
          {uploads?.map((v,i)=>
            <ImageWrapper 
              key={i}
              url={v.url} 
              width={v.width}
              minHeight={v.height}
            >
              <DeleteIcon
                disabled={params.disabled}
                onClick={(e)=>{
                  e.preventDefault()
                  deleteImage?.(i, {
                    id: v?.id
                  });
              }} />
            </ImageWrapper>
          )}
          {imageParams?.map((v,i)=>
            <ImageWrapper 
              key={i + (uploads?.length||0)}
              url={v.url} 
              width={v.width}
              minHeight={v.height}
            >
              <DeleteIcon
                disabled={params.disabled}
                onClick={(e)=>{
                  e.preventDefault()
                  deleteImage?.(i);
              }} />
            </ImageWrapper>
          )}
        </ImageContainer>: null }
      {withImage && 
        <FileInput 
          onClick={onImageClick} 
          disabled={imageDisabled || params.disabled} 
          $value={''} 
          $onInputChange={
            (e:any)=>onImageSubmit?.(e, { createRecord:true, multiple: true }
          )}>
          <IconWrapper 
            as='div' 
            position='absolute' 
            right='2rem' 
            bottom='1rem'>
              <PIcon/>
          </IconWrapper>
        </FileInput>}
      {withEmoji && 
        <IconWrapper 
          disabled={params.disabled} 
          onClick={()=>setEmojiOpen?.(true)} 
          position='absolute' 
          right='5rem' 
          bottom='1rem' >
            <SmileIcon/>
        </IconWrapper>}
      {withEmoji && emojiOpen && <EmojiWrapper>
        {onEmojiClick && <Picker onEmojiClick={(e,d)=>{onEmojiClick?.(e,d); setEmojiOpen?.(false)}} />}
      </EmojiWrapper>}
    </FieldWrapper>
  )
}

