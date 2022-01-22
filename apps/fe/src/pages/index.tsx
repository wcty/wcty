import FloatButtons from 'containers/FloatButtons'
import Slides from 'containers/Slides'
import { getLangServerSideProps, loadTranslation, ServerI18nProps, useServerI18n } from 'common'
import FloatPanel from 'containers/FloatPanel'
import Sidepanel from 'containers/Sidepanel'
import Head from 'next/head'
import DefaultInitiativeCover from 'assets/images/wecity_chat_512.png'
import { MapWrapper } from 'styles'

import { lazy, Suspense } from 'react'
import { GetStaticProps } from 'next'
const MapContents = lazy(()=>import('containers/MapContents'))
const Map = lazy(()=>import('components/Map'))

export const getStaticProps: GetStaticProps = async (ctx) => {
  const translation = await loadTranslation(
    ctx.locale!,
    process.env.NODE_ENV === 'production'
  )

  return {
    props: {
      translation
    }
  }
}

export default function RootPath() {
  const name = "Explore civic initiatives and social enterprises"
  const description = "Navigate the map of your city to see what is going on, and how to make impact."

  return <>
    <Head>
      <title>{`${name} | Wecity`}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={DefaultInitiativeCover} />
      <meta property="og:title" content={name} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Wecity" />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content={name} />
      <meta property="twitter:description" content={description} />
    </Head>
    <MapWrapper>
      <Suspense fallback={null}>
        <Map>
          <Suspense fallback={null}>
            <MapContents/>
          </Suspense>
        </Map>
      </Suspense>
    </MapWrapper>
    <FloatButtons/>
    <FloatPanel/>
    <Slides/>
    <Sidepanel/>
  </>
}
