import App, { AppProps, AppContext } from 'next/app'
import { GlobalStyle } from 'styles'
import { cacheConfig, Fonts, theme, useLayout } from 'common'
import 'resize-observer-polyfill/dist/ResizeObserver.global'
import 'mapbox-gl/dist/mapbox-gl.css';
import { StrictMode } from 'react'
import { RecoilRoot, } from 'recoil'
import { NhostAuthProvider } from '@nhost/react-auth'
import { NhostApolloProvider } from 'common'
import { ThemeProvider } from 'styled-components'
import { InMemoryCache } from '@apollo/client';
import { Map } from 'components'
import * as nhost from 'common/nhost'
import { MapWrapper } from 'styles'
import MapContents from 'containers/MapContents'
import ClientOnly from 'components/ClientOnly'
import Auth from 'components/Auth'

var consoleerror = console.error;
console.error = function (err) {
    if (typeof (err.stack) != 'undefined' && err.stack.includes('https://planet.weee.city/')) {
        return;
    } else {
        consoleerror(err);
    }
}

export default function AppWrapper({ Component, pageProps }:AppProps) {
  return (
    <>
      <StrictMode>
        <NhostAuthProvider {...{nhost}}>
          <NhostApolloProvider
            {...{nhost}}
            cache={new InMemoryCache( cacheConfig )}
            publicRole='anonymous'
            graphqlUrl={`https://hasura-aws.weee.city/v1/graphql`}
          >
            <RecoilRoot>
                <Map.Context.Provider value={{map:undefined}}>
                  <ThemeProvider {...{theme:{...theme, layout: useLayout()}}}>
                      <GlobalStyle />
                      <Fonts/>
                      <ClientSetup/>
                      <Component {...pageProps} />
                  </ThemeProvider>
                </Map.Context.Provider>
            </RecoilRoot>
          </NhostApolloProvider>
        </NhostAuthProvider>
      </StrictMode>
    </>
  )
}

function ClientSetup(){

  return (
    <ClientOnly>
      <Auth/>
      <MapWrapper>
        <Map>
          <MapContents/>
        </Map>
      </MapWrapper>
    </ClientOnly>
  )
}
