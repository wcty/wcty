import { IconButton } from "@ui"
import { useLayout } from "common"
import { useState } from "react"
import { CarouselWrapper, CloseIcon, GalleryIcon, Image, LeftArrow, RightArrow, SwipeableViews } from "./styles"
import type { SlideRenderProps } from 'react-swipeable-views-utils';
import { slideRenderer } from "./slideRenderer"


export type GalleryImage = {
  url: string,
  // date?: string,
}

export function FullscreenCarousel({
  images, 
  defaultIndex,
  onClose = ()=>{},
  withGalleryButton
}:{
  images: GalleryImage[],
  defaultIndex?: number,
  onClose: ()=>void,
  withGalleryButton?: boolean
}){

  const [index, setIndex] = useState(defaultIndex || 0)
  const layout = useLayout()
  function onChangeIndex(i:number){
    if(i>=0 && i<=images.length-1){
      setIndex(i)
    }
  }

  return (
    <CarouselWrapper >
      {layout==='mobile'?
      <>
        <SwipeableViews
          {...{index, onChangeIndex}}
          slideCount={images.length}
          overscanSlideAfter={2}
          overscanSlideBefore={2}
          enableMouseEvents
          slideRenderer={(v:SlideRenderProps)=>
              slideRenderer({...v, entry: images[v.key] }
          )}
        />
        <CloseIcon>
          <IconButton 
            onClick={()=>onClose()} 
            icon='close'
            customType="secondary"
            customSize="small"/>
        </CloseIcon>
        {withGalleryButton && <GalleryIcon>
          <IconButton 
            onClick={()=>setIndex(index===images.length-1? 0: index+1)} 
            icon='gallery'
            customType="secondary"
            customSize="small"/>
        </GalleryIcon>}
      </>:
      <>
        <Image src={images[index].url} />
        <LeftArrow>
          <IconButton 
            onClick={()=>setIndex(index===0? images.length-1: index-1)} 
            icon='arrow-left'/>
        </LeftArrow>
        <RightArrow>
          <IconButton 
            onClick={()=>setIndex(index===images.length-1? 0: index+1)} 
            icon='arrow-right'/>
        </RightArrow>
        <CloseIcon>
          <IconButton 
            onClick={()=>onClose()} 
            icon='close'
            customType="secondary"
            customSize="small"/>
        </CloseIcon>
        {withGalleryButton && <GalleryIcon>
          <IconButton 
            onClick={()=>setIndex(index===images.length-1? 0: index+1)} 
            icon='gallery'
            customType="secondary"
            customSize="small"/>
        </GalleryIcon>}
      </>}
    </CarouselWrapper>
  )
}