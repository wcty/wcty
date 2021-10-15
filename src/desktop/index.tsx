import { Route, useHistory, useLocation } from 'react-router-dom'
import { Map } from 'components'
import { useRecoilState } from 'recoil'
import { MapWrapper } from './styles'
import Sidepanel from './Sidepanel'
import Login from './Login'
import MapContents from './MapContents'
import App from 'App'
import { FloatPanel } from './FloatPanel'
import InitiativeDetail from 'containers/InitiativeDetail'

export default function DesktopVersion(){

  return <>
      <Route path="/login">
        <Login/>
      </Route>
      <Route path="/initiative/:id">
        <InitiativeDetail/>
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