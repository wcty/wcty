import FloatButtons from 'containers/FloatButtons'
import Creation from 'containers/Creation'
import FloatPanel from 'containers/FloatPanel'
import Sidepanel from 'containers/Sidepanel'
import { getLangServerSideProps, ServerI18nProps, useServerI18n } from 'common'
import Head from 'next/head'
import DefaultInitiativeCover from 'assets/images/wecity_chat_512.png'
import { MapWrapper } from 'styles'

import { lazy, Suspense } from 'react'
const MapContents = lazy(()=>import('containers/MapContents'))
const Map = lazy(()=>import('components/Map'))

export const getServerSideProps = getLangServerSideProps
export default function CreateInitiative(props:ServerI18nProps){
  console.log('here')
  useServerI18n(props)
  const name = "Create initiative"
  const description = "Select the location in your city, and describe what would you like to change there. Create initiatives and find support in Wecity platform."
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
          <MapContents/>
        </Map>
      </Suspense>
    </MapWrapper>
    <FloatButtons bottom/>
    <FloatPanel/>
    <Creation/>
    <Sidepanel/>
  </>
}

