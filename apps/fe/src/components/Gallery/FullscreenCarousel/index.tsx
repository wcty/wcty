import { useState } from "react"
import { CarouselWrapper } from "./styles"


export type GalleryImage = {
  url: string,
  // date?: string,
}

export function FullscreenCarousel({
  images, 
  defaultIndex,
  onClose = ()=>{}
}:{
  images: GalleryImage[],
  defaultIndex?: number,
  onClose: ()=>void
}){

  const [index, setIndex] = useState(defaultIndex || 0)

  return (
    <CarouselWrapper>
      
    </CarouselWrapper>
  )
}