import { Route } from 'react-router-dom'
import { Map } from 'components'
import { MapWrapper } from './styles'
import Login from './Login'
import MapContents from './MapContents'
import FloatPanel from './FloatPanel'
import Slides from './Slides'
import Buttons from './Buttons'
import Sidepanel from './Sidepanel'

export default function MobileVersion(){

  return <>
      <Route path="/login">
        <Login/>
      </Route>
      <Route path="/initiative/:id"> 
        <FloatPanel/>
      </Route>
      <Route path="/" exact>
        <MapWrapper>
          <Map>
            <MapContents/>
          </Map>
        </MapWrapper>
        <FloatPanel/>
        <Slides/>
        <Buttons/>
        <Sidepanel/>
      </Route>
  </>
}
