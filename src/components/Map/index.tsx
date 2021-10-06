import MapGL, { AttributionControl, Layer, Source } from '@urbica/react-map-gl'
import { MapLayerMouseEvent } from 'mapbox-gl'
import { atoms, useGeolocation, mapboxToken } from 'misc'
import { useRecoilState } from 'recoil'
import LocationIcon from './LocationIcon'
import LoadIcons from './LoadIcons'
// import Markers from './Markers'
import Satellite from './Satellite'
import { useHistory, useLocation } from 'react-router-dom'
import mapStyle from './mapStyle.json'

export default ()=>{
  const [viewport, setViewport] = useRecoilState(atoms.viewport);
  const [satellite] = useRecoilState(atoms.satellite)
  const [cursor, setCursor] = useRecoilState(atoms.cursor)
  const history = useHistory()
  const url = useLocation()

  const onClick = (event:MapLayerMouseEvent) => {
    if (event?.features?.length !== 0){ 
      const selected = event?.features?.[0]
      if(selected){
        console.log(selected)
        history.push(`/initiative/${event?.features?.[0]?.id}`) 
      }
    }
  }
 
  return (
      <>
        <MapGL
          style={{  width: '100%', height: '100%', border:"none", outline: "none" }}
          mapStyle={mapStyle}
          accessToken={mapboxToken}
          onViewportChange={(v:any)=>setViewport({...viewport, ...v})}
          attributionControl={false}
          cursorStyle={cursor}
          {...viewport}
          onClick={()=>{ history.push('/') }}
        >
          <AttributionControl
            compact={true}
            position='bottom-left'
          />
          <LoadIcons />
          { satellite && <Satellite />}
          <LocationIcon />

        </MapGL>
      </>
    )
}
