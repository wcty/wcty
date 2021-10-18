import { AttributionControl, FeatureProps, Layer, MapGLProps, Source, Specs, Viewport, ViewportChangeMethodProps } from '@urbica/react-map-gl'
import { AnimationOptions } from 'mapbox-gl'
import { atoms, useGeolocation, mapboxToken } from 'common'
import { atom, useRecoilState } from 'recoil'
import LocationIcon from './LocationIcon'
import LoadIcons from './LoadIcons'
// import Markers from './Markers'
import Satellite from './Satellite'
import { useHistory, useLocation } from 'react-router-dom'
import mapStyle from './mapStyle.json'
import { ReactNode } from 'react'
import { MapGL } from './styles'

export default function Map({children}:{children?:ReactNode}){
  const [viewport, setViewport] = useRecoilState(Map.viewport);
  const [satellite] = useRecoilState(Map.satellite)
  const [cursor] = useRecoilState(Map.cursor)
  const [,setSelected] = useRecoilState(Map.selected)

  const history = useHistory()
 
  return (
      <>
        <MapGL
          style={{  width: '100%', height: '100%', border:"none", outline: "none" }}
          mapStyle={mapStyle}
          accessToken={mapboxToken}
          onViewportChange={(v:any)=>setViewport({...viewport, ...v})}
          attributionControl={false}
          cursorStyle={cursor}
          hash
          {...viewport}
          onClick={()=>{ history.push('/'); setSelected(null) }}
        >
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

Map.viewport = atom({
  key: 'mapViewport',
  default: {
    latitude: 50.4501, 
    longitude: 30.5234, 
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

Map.selected = atom({
  key: 'mapSelected',
  default: null as (GeoJSON.Feature<GeoJSON.Point> & Omit<FeatureProps<Specs[keyof Specs]>['features'][number],'layer'|'sourceLayer'|'state'|'modified_at'>) |null // |null
})

Map.layers_list = ['initiative', 'organization'] as ('initiative'|'organization')[]

Map.layers = atom({
  key: 'mapLayers',
  default: Map.layers_list
})


