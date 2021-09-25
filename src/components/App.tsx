import { useEffect } from 'react'
import Map from './Map'
import { Route, useHistory, useLocation } from 'react-router-dom'
import Login from './Login'
import Intro from './Intro'
// import Cards from './Cards'
import Initiatives from './Initiatives'
import { InitiativeFab, MenuFab, LocateFab, LayersFab } from './Fabs'
import { useRecoilState } from 'recoil'
import { atoms, auth } from 'misc'
import { useUserLazyQuery } from 'generated'
import { AppWrapper, MapWrapper } from './styles'


export default function App() {
  const [user, setUser] = useRecoilState(atoms.user)
  const url = useLocation()
  const history = useHistory()
  const [satellite, setSatellite] = useRecoilState(atoms.satellite)

  const [getUser, {data:userData}] = useUserLazyQuery()
  
  useEffect(()=>{
    if(userData){
      console.log(userData)
      setUser(userData?.users_by_pk)
      history.push('/')
    }
  },[userData])

  useEffect(()=>{
    auth.onAuthStateChanged((loggedIn?:boolean) => {
      if(loggedIn){
        const user_id = auth.getClaim("x-hasura-user-id");
        console.log(user_id)
        getUser({variables:{user_id}})
      }else{
        setUser(null)
      }
    });
  },[])

  return (
    <AppWrapper>
      <Route path="/login">
        <Login/>
      </Route>
      <Route path="/">
        <MapWrapper>
          <Map />
          <MenuFab />
          {url?.pathname?.includes('/intro') && <Intro />}
          {/* <Cards /> */}
          {user?
            <InitiativeFab active={false} />:
            <InitiativeFab active={true} />
          }
          <LocateFab />
          <LayersFab />

        </MapWrapper>
      </Route>
      <Route path='/initiatives' render={()=>user?<Initiatives />:null} />
    </AppWrapper>
  )
}
