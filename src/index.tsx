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
import { defaultDataIdFromObject, InMemoryCache, FieldMergeFunction  } from '@apollo/client';
import { ThemeProvider } from 'styled-components'
import App from './App'
import { Helmet } from "react-helmet";

const AppRoot = ()=> 
  <React.StrictMode>
    <NhostAuthProvider nhost={{auth,storage}}>
      <NhostApolloProvider
        nhost={{auth,storage}}
        cache={new InMemoryCache({
          typePolicies: {
            Query: {
              fields:{
                entries_nearby: {
                  keyArgs: false,
                  merge(existing, incoming, { args }) {
                    const merged = existing ? existing.slice(0) : [];
                    for (let i = 0; i < incoming.length; ++i) {
                      merged[args?.offset + i] = incoming[i];
                    }
                    return merged;
                  },
                }
              }
            },
          },
        })}
        publicRole='anonymous'
        graphqlUrl={`https://hasura-aws.weee.city/v1/graphql`}
      >
        <Router>
          <RecoilRoot>
            <ThemeProvider {...{theme}}>
              <Helmet>
                <link href='https://api.mapbox.com/mapbox-gl-js/v2.5.1/mapbox-gl.css' rel='stylesheet' />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" cross-origin/>
                <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&family=Montserrat:wght@400;600&display=swap" rel="stylesheet"/>              
              </Helmet>
              <App />
            </ThemeProvider>
          </RecoilRoot>
        </Router>
      </NhostApolloProvider>
    </NhostAuthProvider>
  </React.StrictMode>


render(<AppRoot />, document.getElementById("root"))

serviceWorker.unregister()
