import MapGL, { AttributionControl, FeatureProps, MapContext, Specs, Viewport, ViewportChangeMethodProps } from '@urbica/react-map-gl'
import { AnimationOptions, Map as MapType } from 'mapbox-gl'
import { mapboxToken } from 'common'
import { atom, useRecoilState } from 'recoil'
import LocationIcon from './LocationIcon'
import LoadIcons from './LoadIcons'
import Satellite from './Satellite'
import mapStyle from './mapStyle.json'
import { createContext, ReactNode, useContext, useEffect, useRef } from 'react'
// import { MapGL } from './styles'
import Cookies from 'universal-cookie'
import { useRouter } from 'next/router'

const cookies = new Cookies()
export default function Map({children}:{children?:ReactNode}){
  const [viewport, setViewport] = useRecoilState(Map.viewport);
  const [satellite] = useRecoilState(Map.satellite)
  const [cursor] = useRecoilState(Map.cursor)
  const [selected,setSelected] = useRecoilState(Map.selected)

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
          <LoadIcons />
          <>{ satellite && <Satellite /> }</>
          <LocationIcon />
          <>{ children }</>
        </MapGL>
      </>
    )
}

Map.Context = createContext({map:undefined as MapType|undefined})

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

const defaultFocus:number[]|undefined = cookies.get('focus')

Map.viewport = atom({
  key: 'mapViewport',
  default: {
    latitude: defaultFocus?.[1]||50.4501, 
    longitude: defaultFocus?.[0]||30.5234, 
    zoom:15,
    viewportChangeMethod: 'flyTo'
  } as Viewport & { 
    viewportChangeMethod?: ViewportChangeMethodProps,
    viewportChangeOptions?: AnimationOptions
  }, 
})

Map.cursor = atom({
  key: 'mapCursor',
  default: ''
})

Map.satellite = atom({
  key: 'mapSatellite',
  default: false
})

export type Entry = (
  GeoJSON.Feature<GeoJSON.Point> &
  Omit<
    FeatureProps<
      Specs[keyof Specs]
    >['features'][number],
    'layer'|'sourceLayer'|'state'|'modified_at'
  >)|null
Map.selected = atom({
  key: 'mapSelected',
  default: null as Entry
})

Map.layers_list = ['initiative', 'organization'] as ('initiative'|'organization')[]

Map.layers = atom({
  key: 'mapLayers',
  default: Map.layers_list
})


