import { ThemeProvider } from 'styled-components'
import type { AppProps } from 'next/app'
import { GlobalStyle } from 'styles'
import { cacheConfig, Fonts, theme, useI18nDictionary, useLayout, User, useUserData, useWindowDimensions } from 'common'
import 'resize-observer-polyfill/dist/ResizeObserver.global'
import 'mapbox-gl/dist/mapbox-gl.css';
import { StrictMode } from 'react'
import { RecoilRoot, } from 'recoil'
import { NhostAuthProvider } from '@nhost/react-auth'
import { NhostApolloProvider } from 'common'
import { InMemoryCache } from '@apollo/client';
import { Map } from 'components'
import * as nhost from 'common/nhost'
import { MapWrapper } from 'containers/Routing/styles'
import MapContents from 'containers/MapContents'
import UserSetup from '../App'
import { useNhostAuth } from "@nhost/react-auth";
import ClientOnly from 'components/ClientOnly'
import Auth from 'components/Auth'

export default function App({ Component, pageProps }:AppProps) {
  const isBrowser = () => typeof window !== 'undefined';

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
                      <MapWrapper>
                        <Map>
                          <MapContents/>
                        </Map>
                      </MapWrapper>
                      <UserSetup/>
                      <Fonts/>
                      <AppSetup/>
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

function AppSetup(){

  return <ClientOnly>
    <Auth/>
  </ClientOnly>
}