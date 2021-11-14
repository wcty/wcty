import { getLangServerSideProps, ServerI18nProps, useLayout, useServerI18n, useUser } from 'common'
import Initiative from 'containers/Initiative'
import { Burger, ContentWrapper } from 'styles'
import Sidepanel from 'containers/Sidepanel'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { useInitiativeByPkQuery } from 'generated'
import DefaultInitiativeCover from 'assets/images/wecity_chat_512.png'

export default function DynamicInitiative(props:ServerI18nProps) {
  useServerI18n(props)
  const router = useRouter()
  const { id } = router.query
  const layout = useLayout()
  const user = useUser()
  const { data } = useInitiativeByPkQuery({variables:{id,user_id:user?.id}, fetchPolicy:"cache-first", nextFetchPolicy:"cache-only"});

  const name = data?.initiative?.name||'Initiative'
  const description = data?.initiative?.description||data?.initiative?.infos[0].problem||'Initiative from Wecity platform'
  const image = data?.initiative?.image

  return <> 
    <Head>
      <title>{`${name} | Wecity`}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image? image+'?w=500&h=500&q=90' :DefaultInitiativeCover} />
      <meta property="og:title" content={name} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Wecity" />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content={name} />
      <meta property="twitter:description" content={description} />
    </Head>
    {layout==='mobile' && <Burger style={{marginLeft:'1.5rem'}}/>}
    <Sidepanel/>
    <ContentWrapper>
      <Initiative/>
    </ContentWrapper>
  </>
}

export const getServerSideProps = getLangServerSideProps