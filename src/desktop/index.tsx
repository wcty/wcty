import { Route, useHistory, useLocation } from 'react-router-dom'
import { InitiativeFab, MenuFab, LocateFab, LayersFab, Intro, Map, Initiatives } from 'components'
import { useRecoilState } from 'recoil'
import { atoms } from 'misc'
import { MapWrapper } from './styles'
import Sidepanel from './Sidepanel'
import Login from './Login'
import MapContents from './MapContents'
import App from 'App'

export default function DesktopVersion(){
  const [user, setUser] = useRecoilState(App.user)
  const url = useLocation()
  const history = useHistory()
  const [satellite, setSatellite] = useRecoilState(Map.satellite)

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
      </Route>
  </>
}