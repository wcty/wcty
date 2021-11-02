import { Route } from 'react-router-dom'
import { Map } from 'components'
import { ContentWrapper, MapWrapper } from './styles'
import Sidepanel from '../Sidepanel'
import Login from '../Login'
import MapContents from '../MapContents'
import FloatPanel from '../FloatPanel'
import Initiative from 'containers/Initiative'
import FloatButtons from 'containers/FloatButtons'

export default function DesktopVersion(){

  return <>
      <Route exact path="/login">
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