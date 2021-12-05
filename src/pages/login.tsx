import { getLangServerSideProps, ServerI18nProps, useLayout, useServerI18n } from "common"
import Login from "containers/Login"
import Sidepanel from "containers/Sidepanel"
import Head from 'next/head'
import DefaultInitiativeCover from 'assets/images/wecity_chat_512.png'
import { MapWrapper } from "styles"
import { lazy, Suspense } from 'react'
const MapContents = lazy(()=>import('containers/MapContents'))
const Map = lazy(()=>import('components/Map'))

export const getServerSideProps = getLangServerSideProps
export default function LoginRoute(props:ServerI18nProps) {
  const layout = useLayout()
  useServerI18n(props)
  const name = "Login"
  const description = "Login to Wecity to create and join initiatives, and improve the world around you."

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
    <Login/>
    {layout==='mobile'&& <Sidepanel/>}
  </>
}
