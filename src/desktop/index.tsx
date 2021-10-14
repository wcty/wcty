import { Route, useHistory, useLocation } from 'react-router-dom'
import { Map } from 'components'
import { useRecoilState } from 'recoil'
import { MapWrapper } from './styles'
import Sidepanel from './Sidepanel'
import Login from './Login'
import MapContents from './MapContents'
import App from 'App'
import { FloatPanel } from './FloatPanel'

export default function DesktopVersion(){

  return <>
      <Route path="/login">
        <Login/>
      </Route>
      <Route path="/">
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