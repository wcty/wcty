import 'resize-observer-polyfill/dist/ResizeObserver.global'
import { AppProps } from 'next/app'
import { GlobalStyle } from 'styles'
import { cacheConfig, Fonts, memoize, useLayout } from 'common'
import { theme } from '@ui/common'
import { RecoilRoot, } from 'recoil'
import { NhostAuthProvider } from '@nhost/react-auth'
import { NhostApolloProvider } from 'common'
// import { NhostApolloProvider } from '@nhost/react-apollo'

import { ThemeProvider } from 'styled-components'
import { InMemoryCache } from '@apollo/client';
import * as nhost from 'common/nhost'
import MapContext from 'components/Map/ContextProvider'
import Head from 'next/head'
import { i18n } from '@lingui/core'
import { initTranslation } from 'common'
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import { I18nProvider } from '@lingui/react'
import { en, uk } from 'make-plural'
import ClientSetup from "common/ClientSetup";

initTranslation(i18n)

export default function AppWrapper({ Component, pageProps }:AppProps) {
  const layout = useLayout()
  const router = useRouter()
  const locale = router.locale || router.defaultLocale || 'en'
  const firstRender = useRef(true)
  const isWebView = useRef(false)

  if (pageProps.translation && firstRender.current) {
    i18n.load(locale, pageProps.translation)
    i18n.activate(locale)
    firstRender.current = false
  }

  useEffect(() => {
    //initTranslation(i18n)
    isWebView.current = new Navigator().userAgent.includes('[VW;]')
    i18n.loadLocaleData(locale, { plurals: locale==='en'?en:locale==='uk'?uk:en })
    // console.log('Loaded plurals', locale)
  },[])

  useEffect(() => {
    if (pageProps.translation) {
      i18n.load(locale, pageProps.translation)
      i18n.activate(locale)
    }
  }, [locale, pageProps.translation])

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
      <NhostAuthProvider {...{nhost:nhost as any}}>
        <NhostApolloProvider
          {...{nhost}}
          cache={new InMemoryCache( cacheConfig )}
          publicRole='anonymous'
          graphqlUrl={`https://gql.weee.city/v1/graphql`}
        >
          <RecoilRoot>
              <MapContext.Provider value={{map:undefined}}>
                <ThemeProvider {...{theme:{...theme, layout, isWebView: isWebView.current } }}>
                    <GlobalStyle />
                    <ClientSetup/>
                    <I18nProvider i18n={i18n}>
                        <Component {...pageProps} />
                    </I18nProvider>
                </ThemeProvider>
              </MapContext.Provider>
          </RecoilRoot>
        </NhostApolloProvider>
      </NhostAuthProvider>
    </>
  )
}


// ignore in-browser next/js recoil warnings until its fixed.
const mutedConsole = memoize((console:any) => ({
  ...console,
  warn: (...args:any) => (
    args[0].includes?.('Duplicate atom key') || 
    args[0].includes?.('GenerateSW has been called multiple times') ||
    args[0]?.includes?.('Plurals for locale')
  )
    ? null
    : console.warn(...args),
  error: (...args:any) => (
    args[0]?.includes?.('Plurals for locale')
  )
    ? null
    : console.error(...args)
}))

if(process.env.NODE_ENV === 'development'){
  global.console = mutedConsole(global.console);
}
