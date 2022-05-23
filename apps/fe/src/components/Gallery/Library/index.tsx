import { Author, Button, IconButton, Title, Text } from "@ui"
import { useLayout } from "common"
import { useState } from "react"
import { BottomPanel, CarouselWrapper, CloseIcon, FullscreenIcon, GalleryIcon, Grid, Image, ImageContainer, ImageThumb, LeftArrow, LibraryTiles, LibraryWrapper, RightArrow, SwipeableViews } from "../styles"
import type { SlideRenderProps } from 'react-swipeable-views-utils';
import { slideRenderer } from "./slideRenderer"
import { GalleryImage } from "..";
import SimpleBar from 'simplebar-react';
import { useSize } from "@ui/common";
import 'simplebar/dist/simplebar.min.css';
import { ReactComponent as Initiative } from '@assets/icons/initiative.svg'
import { Trans } from "@lingui/macro";
import { atom } from "recoil";
import { useRouter } from "next/router";


export function Library({
  images, 
  defaultIndex,
  header,
  onClose = ()=>{},
  onFullscreenButtonClick
}:{
  images: GalleryImage[],
  defaultIndex?: number,
  header?: string | null,
  onClose: ()=>void,
  onFullscreenButtonClick?: (i:number)=>void
}){

  const [index, setIndex] = useState(defaultIndex || 0)
  const layout = useLayout()
  function onChangeIndex(i:number){
    if(i>=0 && i<=images.length-1){
      setIndex(i)
    }
  }
  const router = useRouter()
  const { id } = router.query

  const { height, ref } = useSize();
  
  return (
    <LibraryWrapper>
      {layout==='desktop' && 
      <CarouselWrapper>
        <ImageContainer>
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

          {onFullscreenButtonClick && 
          <FullscreenIcon>
            <IconButton 
              onClick={()=>onFullscreenButtonClick(index)} 
              icon='fullscreen'
              customType="secondary"
              customSize="small"/>
          </FullscreenIcon>}
        </ImageContainer>
        <BottomPanel>
          <div>
            <Author 
              p='0px 2rem'
              name={images[index]?.user?.display_name || ''}
              picture={images[index]?.user?.avatar_url || ''}
              date={
                images?.[index]?.created_at ? 
                new Date(images[index].created_at!) : 
                undefined }
            />
            <Title h='h4'><Initiative/>{header}</Title>
          </div>
          {images[index]?.post_id && <Button
            mr='2rem'
            onClick={()=>{
              onClose()
              router.push({
                pathname: '/initiative/[id]/post/[post_id]', 
                query: { id, post_id: images[index].post_id }
              }, `/initiative/${id}/post/${images[index].post_id}`, { 
                locale: router.locale 
              }) 
            }}
            customType="outlined">
              <Trans>Go to the image's post</Trans>
          </Button>}
        </BottomPanel>

      </CarouselWrapper>}
      <LibraryTiles {...{ref}}>
        <Title h='h3' 
          position="absolute" 
          top={layout==='desktop'?'0.8rem':'0rem'}>Photos</Title>
        {layout==='mobile' && 
          <Text 
            position="absolute" 
            top='3rem' 
            alignItems='center' 
            customColor='label'
            display='flex'>
              <Initiative style={{transform:'scale(0.6)', width:'22px', margin: 0, marginLeft:'-5px'}}/>{header}
          </Text>}
        <CloseIcon>
          <IconButton 
            onClick={()=>onClose()} 
            icon='close'
            customType="secondary"
            customSize="small"/>
        </CloseIcon>
        <SimpleBar
          autoHide={true}
          style={{ width: '100%', boxSizing: 'border-box', maxHeight: height }}
        >
        <Grid >
          {images.map((v,key)=>
            <ImageThumb {...{key}} 
              onClick={()=>{
                setIndex(key) 
                layout  === 'mobile' && onFullscreenButtonClick?.(key) 
              }}
              selected={key===index && layout==='desktop'}
              src={v.url+'?q=50&w=150'} 
              alt=""/> )}
        </Grid>
        </SimpleBar>
      </LibraryTiles>
    </LibraryWrapper>
  )
}

