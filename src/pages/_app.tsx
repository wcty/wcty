import { AppProps } from 'next/app'
import Head from 'next/head'
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

export default function AppWrapper({ Component, pageProps }:AppProps) {
  const layout = useLayout()
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="The web platform to help civic self-organisation happen in the cities"
        />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        <title>We.City</title>
      </Head>
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
                  <ThemeProvider {...{theme:{...theme, layout}}}>
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

function ClientSetup(props:any){

  return (<>
    <ClientOnly>
      <Auth/>
      <MapWrapper>
        <Map>
          <MapContents/>
        </Map>
      </MapWrapper>
    </ClientOnly>
  </>)
}
