import MapGLUnstyled from '@urbica/react-map-gl'
import styled from 'styled-components/macro'

export const MapGL = styled(MapGLUnstyled)`
  div.mapboxgl-control-container{
    div{
      div.mapboxgl-ctrl.mapboxgl-ctrl-attrib.mapboxgl-compact{
        button.mapboxgl-ctrl-attrib-button{
          display: none;
        }
      }
    }
  }

`
