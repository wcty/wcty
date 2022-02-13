import { CSSImageType, File_Types_Enum, ImageType, UploadedImage } from "@ui/lib/Inputs/TextField/types"
import { useEffect, useState } from "react"


export default function useImages(files:UploadedImage[]){

  const [imageParams, setImageParams] = useState<CSSImageType[]>()

  useEffect(()=>{

    (async function getImageParams(){
      const images = files
        .filter(file => file.type === File_Types_Enum.Image)
        .map(file => file.downloadable_url)

      if(images){
        const imagesObject:ImageType[] = []

        for(let i=0; i<(images?.length||0); i++){
          const url = images?.[i]
          const imageObject:ImageType = await (new Promise((resolve, reject)=>{
            var img = new Image();
            img.onload = function(){
              resolve({
                url: url||'',
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
  },[files])

  return { imageParams, setImageParams }

}