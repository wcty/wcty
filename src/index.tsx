import 'resize-observer-polyfill/dist/ResizeObserver.global'
import './misc/style/index.css'
import 'mapbox-gl/dist/mapbox-gl.css';
import * as serviceWorker from './serviceWorker'

import React from 'react'
import { render } from 'react-dom'
import { RecoilExternalStatePortal, auth } from 'misc'
import { BrowserRouter as Router } from "react-router-dom"
import { RecoilRoot, } from 'recoil'
import { createBrowserHistory } from 'history'
import { NhostAuthProvider } from '@nhost/react-auth'
import { NhostApolloProvider } from "@nhost/react-apollo"
import App from './components/App'
import { InMemoryCache } from '@apollo/client';

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
            {/* <RecoilExternalStatePortal /> */}
            <App />
          </RecoilRoot>
        </Router>
      </NhostApolloProvider>
    </NhostAuthProvider>
  </React.StrictMode>


render(<AppRoot />, document.getElementById("root"))

serviceWorker.unregister()
