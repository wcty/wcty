import { Author, Button, Divider, IconButton, Title } from "@ui"
import { useLayout } from "common"
import { useState } from "react"
import { FullscreenCarouselWrapper, CloseIcon, GalleryIcon, Image, LeftArrow, RightArrow, SwipeableViews, BottomPanel, CarouselWrapper, ImageContainer } from "../styles"
import type { SlideRenderProps } from 'react-swipeable-views-utils';
import { slideRenderer } from "./slideRenderer"
import { ReactComponent as Initiative } from '@assets/icons/initiative.svg'
import { Trans } from "@lingui/macro";


export type GalleryImage = {
  url: string,
  created_at?: string,
  post_id?: string,
  user?:{
    display_name?: string | null,
    id?: number | null,
    avatar_url?: string | null,
  }
}

export function FullscreenCarousel({
  images, 
  defaultIndex,
  onClose = ()=>{},
  onGalleryButtonClick,
  withBottomPanel,
  withPostButton,
  header
}:{
  images: GalleryImage[],
  defaultIndex?: number,
  onClose: ()=>void,
  onGalleryButtonClick?: (i:number)=>void,
  withBottomPanel?: boolean,
  withPostButton?: boolean,
  header?: string | null
}){

  const [index, setIndex] = useState(defaultIndex || 0)
  const layout = useLayout()
  function onChangeIndex(i:number){
    if(i>=0 && i<=images.length-1){
      setIndex(i)
    }
  }

  return (
    <FullscreenCarouselWrapper >
      {layout==='mobile'?
      <>
        <CarouselWrapper>
          <ImageContainer>
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
            {onGalleryButtonClick && <GalleryIcon>
              <IconButton 
                onClick={()=>onGalleryButtonClick(index)} 
                icon='gallery'
                customType="secondary"
                customSize="small"/>
            </GalleryIcon>}
            {withPostButton && images[index].post_id &&
              <Button 
                position='absolute'
                top='2rem'
                left='2rem'
                style={{opacity:0.8}}
                customSize="small"
                customType="secondary">
                <Trans>Go to the image's post</Trans>
              </Button>}
          </ImageContainer>
          {withBottomPanel && <>
            <BottomPanel>
              <Title h='h4' bold m='0.3rem 2rem' alignItems='center' >
                <Initiative style={{transform:'scale(0.6)', width:'22px', margin: 0, marginLeft:'-5px'}}/>
                {header}
              </Title>
              <Divider m='0' customColor="titleActive" height='1px'/>
              <Author 
                p='0px 2rem'
                flex='1 1 auto'
                alignItems='center'
                name={images[index]?.user?.display_name || ''}
                picture={images[index]?.user?.avatar_url || ''}
                date={
                  images?.[index]?.created_at ? 
                  new Date(images[index].created_at!) : 
                  undefined }
              />
            </BottomPanel>
          </>}
        </CarouselWrapper>
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
        {onGalleryButtonClick && <GalleryIcon>
          <IconButton 
            onClick={()=>onGalleryButtonClick(index)}             
            icon='gallery'
            customType="secondary"
            customSize="small"/>
        </GalleryIcon>}
      </>}
    </FullscreenCarouselWrapper>
  )
}