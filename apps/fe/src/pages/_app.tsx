import 'resize-observer-polyfill/dist/ResizeObserver.global'
import { AppProps } from 'next/app'
import { GlobalStyle } from 'styles'
import { cacheConfig, Fonts, theme, useLayout } from 'common'
import { RecoilRoot, } from 'recoil'
import { NhostAuthProvider } from '@nhost/react-auth'
import { NhostApolloProvider } from 'common'
// import { NhostApolloProvider } from '@nhost/react-apollo'

import { ThemeProvider } from 'styled-components'
import { InMemoryCache } from '@apollo/client';
import * as nhost from 'common/nhost'
import MapContext from 'components/Map/ContextProvider'
import ClientOnly from 'components/ClientOnly'
import Auth from 'components/Auth'
import Head from 'next/head'


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
      <NhostAuthProvider {...{nhost}}>
        <NhostApolloProvider
          {...{nhost}}
          cache={new InMemoryCache( cacheConfig )}
          publicRole='anonymous'
          graphqlUrl={`https://gql.weee.city/v1/graphql`}
        >
          <RecoilRoot>
              <MapContext.Provider value={{map:undefined}}>
                <ThemeProvider {...{theme:{...theme, layout}}}>
                    <GlobalStyle />
                    <Fonts/>
                    <ClientSetup/>
                    <Component {...pageProps} />
                </ThemeProvider>
              </MapContext.Provider>
          </RecoilRoot>
        </NhostApolloProvider>
      </NhostAuthProvider>
    </>
  )
}

function ClientSetup(props:any){

  return (<>
    <ClientOnly>
      <Auth/>
    </ClientOnly>
  </>)
}
// Memoize function is used to cache the result of the function.

const memoize = (func:any) => {
  let cache:any = {};
  return (...args:any) => {
    let key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    }
    let result = func(...args);
    cache[key] = result;
    return result;
  };
};

// ignore in-browser next/js recoil warnings until its fixed.
const mutedConsole = memoize((console:any) => ({
  ...console,
  warn: (...args:any) => (args[0].includes('Duplicate atom key') || args[0].includes('GenerateSW has been called multiple times'))
    ? null
    : console.warn(...args)
}))

global.console = mutedConsole(global.console);