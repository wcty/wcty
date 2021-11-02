import { Route, useHistory } from 'react-router-dom'
import { Map } from 'components'
import { Burger, ContentWrapper, MapWrapper } from './styles'
import Sidepanel from '../Sidepanel'
import Login from '../Login'
import MapContents from '../MapContents'
import FloatPanel from '../FloatPanel'
import Initiative from 'containers/Initiative'
import FloatButtons from 'containers/FloatButtons'
import FloatPanelMobile from 'containers/FloatPanelMobile/'
import Slides from 'containers/Slides'
import { useEffect } from 'react'
import { useLayout } from 'common'
import { useRecoilState } from 'recoil'

export default function Routing(){
  const layout = useLayout()
  const [selected, setSelected] = useRecoilState(Map.selected)

  return <>
      <Route exact path="/login">
          <Login/>
          {layout==='mobile'&&<Sidepanel/>}
      </Route>
      <Route exact path="/success">
          <AuthSuccess/>
      </Route>
      <Route exact path="/initiative/:id"> 
        {layout==='mobile'&&<Burger/>}
        <Sidepanel/>
        {layout==='desktop'?
          <ContentWrapper>
            <Initiative.Desktop/>
          </ContentWrapper>:
          <Initiative.Mobile/>}
      </Route>
      <Route path="/" exact>
        <MapWrapper>
          <Map>
            <MapContents/>
          </Map>
        </MapWrapper>
        <FloatButtons/>
        {layout==='desktop'?
          <FloatPanel/>:
          <FloatPanelMobile/>}
        {layout==='mobile'&&<Slides/>}
        <Sidepanel/>
      </Route>
  </>
}

function AuthSuccess(){
  const history = useHistory()
  
  useEffect(()=>{
    const callbackUrl = localStorage.getItem('callbackUrl');
    if(callbackUrl){
      history.push(callbackUrl)
    }else{
      history.push('/')
    }
  },[])
  return null
}
