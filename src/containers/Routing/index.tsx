import { Map } from 'components'
import { MapWrapper } from './styles'
import MapContents from '../MapContents'
import { useLayout } from 'common'

export default function Routing(){

  return <>
    <MapWrapper>
      <Map>
        <MapContents/>
      </Map>
    </MapWrapper>
  </>
}


