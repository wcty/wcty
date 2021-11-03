import { Route, useHistory } from 'react-router-dom'
import { Map } from 'components'
import { Burger, ContentWrapper, MapWrapper } from './styles'
import Sidepanel from '../Sidepanel'
import Login from '../Login'
import MapContents from '../MapContents'
import FloatPanel from '../FloatPanel'
import Initiative from 'containers/Initiative'
import FloatButtons from 'containers/FloatButtons'
import Slides from 'containers/Slides'
import { useLayout } from 'common'
import AuthSuccess from './AuthSuccess'
import Creation from 'containers/Creation'

export default function Routing(){
  const layout = useLayout()

  return <>
      <MapWrapper>
        <Map>
          <MapContents/>
        </Map>
      </MapWrapper>
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
        <FloatButtons/>
        <FloatPanel/>
        <Slides/>
        <Sidepanel/>
      </Route>
      <Route path="/create-initiative" exact>
        <FloatButtons bottom/>
        <FloatPanel/>
        <Creation/>
        <Sidepanel/>
      </Route>
  </>
}


