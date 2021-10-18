import 'resize-observer-polyfill/dist/ResizeObserver.global'
import 'mapbox-gl/dist/mapbox-gl.css';
import * as serviceWorker from './serviceWorker'

import React from 'react'
import { render } from 'react-dom'
import { auth, theme } from 'common'
import { BrowserRouter as Router } from "react-router-dom"
import { RecoilRoot, } from 'recoil'
import { createBrowserHistory } from 'history'
import { NhostAuthProvider } from '@nhost/react-auth'
import { NhostApolloProvider } from "@nhost/react-apollo"
import App from './App'
import { InMemoryCache } from '@apollo/client';
import { ThemeProvider } from 'styled-components'
export const history = createBrowserHistory()

const AppRoot = ()=> 
  <React.StrictMode>
    <NhostAuthProvider auth={auth}>
      <NhostApolloProvider
        auth={auth}
        cache={new InMemoryCache({ addTypename: false })}
        publicRole='anonymous'
        gqlEndpoint={`https://hasura-aws.weee.city/v1/graphql`}
      >
        <Router {...{history}}>
          <RecoilRoot>
            <ThemeProvider {...{theme}}>
              {/* <RecoilExternalStatePortal /> */}
              <App />
            </ThemeProvider>
          </RecoilRoot>
        </Router>
      </NhostApolloProvider>
    </NhostAuthProvider>
  </React.StrictMode>


render(<AppRoot />, document.getElementById("root"))

serviceWorker.unregister()
