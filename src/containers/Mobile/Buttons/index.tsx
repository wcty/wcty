import { Button, ButtonsWrapper } from './styles'
import {ReactComponent as PinIcon} from 'assets/icons/pin.svg'
import {ReactComponent as GPSIcon} from 'assets/icons/gps.svg'
import {ReactComponent as SatelliteIcon} from 'assets/icons/satellite.svg'
import { useRecoilState } from 'recoil'
import { Map } from 'components'
import { atoms, useGeolocation } from 'common'

export default function Buttons(){
  const [,setSatellite] = useRecoilState(Map.satellite)
  const [view,setViewport] = useRecoilState(Map.viewport)
  const [,setFocus] = useRecoilState(atoms.focalPoint)
  const location = useGeolocation()

  return <ButtonsWrapper>
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