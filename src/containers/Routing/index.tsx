import { Route } from 'react-router-dom'
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

function Desktop(){

  return <>
      <Route exact path="/login">
          {/* <MapWrapper>
            <Map>
              <MapContents/>
            </Map>
          </MapWrapper> */}
          <Login/>

      </Route>
      <Route exact path="/initiative/:id"> 
        <Sidepanel/>
        <ContentWrapper>
          <Initiative.Desktop/>
        </ContentWrapper>
      </Route>
      <Route path="/" exact>
        <MapWrapper>
          <Map>
            <MapContents/>
          </Map>
        </MapWrapper>
        <FloatButtons/>
        <Sidepanel/>
        <FloatPanel/>
      </Route>
  </>
}

function Mobile(){

  return <>
    <Route path="/login">
      <Login/>
      <Sidepanel/>
    </Route>
    <Route path="/initiative/:id"> 
      <Burger/>
      <Sidepanel/>
      <Initiative.Mobile/>
    </Route>
    <Route path="/" exact>
      <MapWrapper>
        <Map>
          <MapContents/>
        </Map>
      </MapWrapper>
      <FloatPanelMobile/>
      <Slides/>
      <FloatButtons/>
      <Sidepanel/>
    </Route>
  </>
}

export default { Desktop, Mobile }