import 'resize-observer-polyfill/dist/ResizeObserver.global'
import 'mapbox-gl/dist/mapbox-gl.css';
import * as serviceWorker from './serviceWorker'

import React from 'react'
import { render } from 'react-dom'
import { auth, storage, theme } from 'common'
import { BrowserRouter as Router } from "react-router-dom"
import { RecoilRoot, } from 'recoil'
import { NhostAuthProvider } from '@nhost/react-auth'
import { NhostApolloProvider } from "@nhost/react-apollo"
import { InMemoryCache,  } from '@apollo/client';
import { ThemeProvider } from 'styled-components'
import App from './App'

const AppRoot = ()=> 
  <React.StrictMode>
    <NhostAuthProvider nhost={{auth,storage}}>
      <NhostApolloProvider
        nhost={{auth,storage}}
        cache={new InMemoryCache()}
        publicRole='anonymous'
        graphqlUrl={`https://hasura-aws.weee.city/v1/graphql`}
      >
        <Router>
          <RecoilRoot>
            <ThemeProvider {...{theme}}>
              <App />
            </ThemeProvider>
          </RecoilRoot>
        </Router>
      </NhostApolloProvider>
    </NhostAuthProvider>
  </React.StrictMode>


render(<AppRoot />, document.getElementById("root"))

serviceWorker.unregister()
