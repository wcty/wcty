import FloatButtons from 'containers/FloatButtons'
import Slides from 'containers/Slides'
import { getLangServerSideProps, ServerI18nProps, useServerI18n } from 'common'
import FloatPanel from 'containers/FloatPanel'
import Sidepanel from 'containers/Sidepanel'
import Head from 'next/head'
import DefaultInitiativeCover from 'assets/images/wecity_chat_512.png'

export const getServerSideProps = getLangServerSideProps

export default function RootPath(props:ServerI18nProps) {
  useServerI18n(props)
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
    <FloatButtons/>
    <FloatPanel/>
    <Slides/>
    <Sidepanel/>
  </>
}
