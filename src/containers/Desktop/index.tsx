import { Route, useHistory, useLocation } from 'react-router-dom'
import { Map } from 'components'
import { MapWrapper } from './styles'
import Sidepanel from './Sidepanel'
import Login from './Login'
import MapContents from './MapContents'
import FloatPanel from './FloatPanel'

export default function DesktopVersion(){

  return <>
      <Route path="/login">
        <Login/>
      </Route>
      <Route path="/initiative/:id"> 
        <Sidepanel/>
        <FloatPanel/>
      </Route>
      <Route path="/" exact>
        <MapWrapper>
          <Map>
            <MapContents/>
          </Map>
        </MapWrapper>
        <Sidepanel/>
        <FloatPanel/>
      </Route>
      
  </>
}