import { Route, useHistory, useLocation } from 'react-router-dom'
import { InitiativeFab, MenuFab, LocateFab, LayersFab, Intro, Login, Map, Initiatives } from 'components'
import { useRecoilState } from 'recoil'
import { atoms } from 'misc'
import { MapWrapper } from './styles'

export default function MobileVersion(){
  const [user, setUser] = useRecoilState(atoms.user)
  const url = useLocation()
  const history = useHistory()
  const [satellite, setSatellite] = useRecoilState(atoms.satellite)

  return <>
      <Route path="/login">
        <Login/>
      </Route>
      <Route path="/">
        <MapWrapper>
          <Map />
          <MenuFab />
          {url?.pathname?.includes('/intro') && <Intro />}
          {user?
            <InitiativeFab active={false} />:
            <InitiativeFab active={true} />
          }
          <LocateFab />
          <LayersFab />
        </MapWrapper>
      </Route>
      <Route path='/initiatives' render={
        ()=>user?<Initiatives />:null
      } />
  </>
}