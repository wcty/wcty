import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { atoms, auth, useWindowDimensions } from 'misc'
import { useUserLazyQuery } from 'generated'
import { AppWrapper } from './styles'
import DesktopVersion from 'desktop'
import MobileVersion from 'mobile'
import { createGlobalStyle } from 'styled-components/macro'
import 'assets/fonts/mono/regular/_index.scss'

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'IBM Plex Mono', 'Menlo', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', Courier, monospace;
    box-sizing: border-box;
  }
  h2{
    font-weight: 500;
    font-size: 19;
  }
`
export default function App() {
  const [, setUser] = useRecoilState(atoms.user)
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
