import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { atom, useRecoilState } from 'recoil'
import { auth, User, useWindowDimensions } from 'common'
import { useUserLazyQuery } from 'generated'
import { AppWrapper, GlobalStyle } from './styles'
import { useDeviceSelectors } from 'react-device-detect';
import DesktopVersion from 'containers/Desktop/'
import MobileVersion from 'containers/Mobile/'

export default function App() {
  const [user, setUser] = useRecoilState(App.user)
  const history = useHistory()
  const [getUser, {data:userData}] = useUserLazyQuery()
  const [{isMobile}, data] = useDeviceSelectors(window.navigator.userAgent)
  
  useEffect(()=>{
    if(!user && userData && auth.isAuthenticated()){
      console.log('set user')
      setUser(userData?.users_by_pk)
      if(history.location.pathname==='/oauth/success'){
        history.push('/')
      }
    }
  },[userData, user])

  useEffect(()=>{
    auth.onAuthStateChanged((loggedIn?:boolean) => {
      if(loggedIn){
        const user_id = auth.getClaim("x-hasura-user-id");
        console.log(user_id)
        getUser({variables:{user_id}})
      }else{
        console.log('not logged in')
        setUser(null)
      }
    });
  },[])
  
  const { width, height } = useWindowDimensions()
  console.log(isMobile)
  return <>
    <GlobalStyle/>
    <AppWrapper>
      {isMobile ? <MobileVersion/>: <DesktopVersion/> }
    </AppWrapper>
  </>
}

App.user = atom({
  key: 'user',
  default: undefined as User,
});
