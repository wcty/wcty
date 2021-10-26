import { Route } from 'react-router-dom'
import { Map } from 'components'
import { ContentWrapper, MapWrapper } from './styles'
import Sidepanel from './Sidepanel'
import Login from './Login'
import MapContents from './MapContents'
import FloatPanel from './FloatPanel'
import InitiativeDetail from 'containers/InitiativeDetail'

export default function DesktopVersion(){

  return <>
      <Route path="/login">
        <Login/>
      </Route>
      <Route path="/initiative/:id" exact> 
        <Sidepanel/>
        <ContentWrapper>
          <InitiativeDetail/>
        </ContentWrapper>
        
      </Route>
      <Route path="/" exact>
        <MapWrapper>
          <Map>
            <MapContents/>
          </Map>
        </MapWrapper>
        <Sidepanel/>
        <FloatPanel/>
      </Route>
      
  </>
}