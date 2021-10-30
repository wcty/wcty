import 'resize-observer-polyfill/dist/ResizeObserver.global'
import 'mapbox-gl/dist/mapbox-gl.css';
import * as serviceWorker from './serviceWorker'
import { StrictMode } from 'react'
import { render } from 'react-dom'
import { cacheConfig, Fonts, theme } from 'common'
import { BrowserRouter as Router } from "react-router-dom"
import { RecoilRoot, } from 'recoil'
import { NhostAuthProvider } from '@nhost/react-auth'
import { NhostApolloProvider } from "@nhost/react-apollo"
import { InMemoryCache } from '@apollo/client';
import { ThemeProvider } from "styled-components/macro"
import { Map } from 'components'
import * as nhost from 'common/nhost'
import App from './App'

const AppRoot = ()=> 
  <StrictMode>
    <NhostAuthProvider {...{nhost}}>
      <NhostApolloProvider
        {...{nhost}}
        cache={new InMemoryCache(cacheConfig)}
        publicRole='anonymous'
        graphqlUrl={`https://hasura-aws.weee.city/v1/graphql`}
      >
        <Router>
          <RecoilRoot>
            <ThemeProvider {...{theme}}>
              <Fonts/>
              <Map.Context.Provider value={{map:undefined}}>
                <App />
              </Map.Context.Provider>
            </ThemeProvider>
          </RecoilRoot>
        </Router>
      </NhostApolloProvider>
    </NhostAuthProvider>
  </StrictMode>

render(<AppRoot />, document.getElementById("root"))

serviceWorker.unregister()
