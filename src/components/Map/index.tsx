import MapGL, { AttributionControl, FeatureProps, MapContext, Specs, Viewport, ViewportChangeMethodProps } from '@urbica/react-map-gl'
import type { Map as MapType } from 'mapbox-gl'
import { atoms, mapboxToken } from 'common'
import { useRecoilState } from 'recoil'
import LocationIcon from './LocationIcon'
import LoadIcons from './LoadIcons'
import Satellite from './Satellite'
import mapStyle from './mapStyle.json'
import { ReactNode, useContext, useEffect } from 'react'
// import { MapGL } from './styles'
import Cookies from 'universal-cookie'
import { useRouter } from 'next/router'
import ContextProvider from './ContextProvider'

const cookies = new Cookies()
export default function Map({children}:{children?:ReactNode}){
  const [viewport, setViewport] = useRecoilState(atoms.viewport);
  const [satellite] = useRecoilState(atoms.satellite)
  const [cursor] = useRecoilState(atoms.cursor)
  const [selected,setSelected] = useRecoilState(atoms.selected)

  useEffect(()=>{
    if(selected?.geometry?.coordinates)
    cookies.set('focus', selected.geometry.coordinates , { path: '/' });
  },[selected])

  const router = useRouter()
 
  return (
      <>
        <MapGL
          style={{  width: '100%', height: '100%', border:"none", outline: "none" }}
          mapStyle={mapStyle}
          accessToken={mapboxToken}
          onViewportChange={(v:any)=>setViewport({...viewport, ...v})}
          attributionControl={false}
          cursorStyle={cursor}
          // hash
          {...viewport}
          onClick={(e:any)=>{
            if(!router.pathname.includes('/create-initiative')){
              router.push('/',undefined,{shallow:true}); 
              setSelected(null)   
            }
          }}
        >
          <ContextSetter/>
          <AttributionControl
            compact={true}
            position='bottom-left'
          />
          <>{ children }</>
          <LoadIcons />
          <>{ satellite && <Satellite /> }</>
          <LocationIcon />
        </MapGL>
      </>
    )
}

Map.Context = ContextProvider

function ContextSetter (){
  const map:MapType = useContext(MapContext)
  const context = useContext(Map.Context)
  useEffect(()=>{
    if(map){
      context.map = map
    }
  },[map, context])
  return null
}
