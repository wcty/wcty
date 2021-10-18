import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { atom, useRecoilState } from 'recoil'
import { auth, User, useWindowDimensions } from 'common'
import { useUserLazyQuery } from 'generated'
import { AppWrapper, GlobalStyle } from './styles'
import DesktopVersion from 'containers/desktop'
import MobileVersion from 'containers/mobile'
import 'assets/fonts/mono/regular/_index.scss'


export default function App() {
  const [, setUser] = useRecoilState(App.user)
  const history = useHistory()
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
  
  const { width, height } = useWindowDimensions()

  return <>
    <GlobalStyle/>
    <AppWrapper>
      {true ? <DesktopVersion/>: <MobileVersion/> }
    </AppWrapper>
  </>
}

App.user = atom({
  key: 'user',
  default: undefined as User,
});
