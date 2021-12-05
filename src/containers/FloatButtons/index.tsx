import { Button, ButtonsWrapper } from './styles'
import {ReactComponent as PinIcon} from 'assets/icons/pin-icon.svg'
import {ReactComponent as GPSIcon} from 'assets/icons/gps.svg'
import {ReactComponent as SatelliteIcon} from 'assets/icons/satellite.svg'
import { useRecoilState } from 'recoil'
import { atoms, useGeolocation, useLayout } from 'common'

export default function FloatButtons({bottom=false}){
  const [,setSatellite] = useRecoilState(atoms.satellite)
  const [view,setViewport] = useRecoilState(atoms.viewport)
  const [,setFocus] = useRecoilState(atoms.focalPoint)
  const location = useGeolocation()
  const layout = useLayout()
  
  return <ButtonsWrapper {...{bottom}}>
    <Button onClick={()=>{
      setFocus([view.longitude, view.latitude])
    }}>
      <PinIcon style={{margin:'5px'}}/>
    </Button>
    <Button onClick={()=>{
      setSatellite(v=>!v)
    }}>
      <SatelliteIcon/>
    </Button>
    <Button onClick={()=>{
      if(location){
        setViewport(v=>({
          ...v,
          longitude:location.longitude,
          latitude:location.latitude
        }))
      }
    }}>
      <GPSIcon/>
    </Button>
  </ButtonsWrapper>
}