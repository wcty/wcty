import { Route } from 'react-router-dom'
import { Map } from 'components'
import { Burger, MapWrapper } from './styles'
import Login from './Login'
import MapContents from './MapContents'
import FloatPanel from './FloatPanel'
import Slides from './Slides'
import Buttons from './Buttons'
import Sidepanel from './Sidepanel'
import Initiative from 'containers/Initiative'

export default function MobileVersion(){

  return <>
    <Route path="/login">
      <Login/>
    </Route>
    <Route path="/initiative/:id"> 
      <Burger/>
      <Sidepanel/>
      <Initiative.Mobile/>
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
