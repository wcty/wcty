import { client, loadTranslation, NHOST_BACKEND_URL, useLayout, NhostProps } from 'common'
import Initiative, { InitiativeProps } from 'containers/Initiative'
import { Burger, ContentWrapper } from 'styles'
import Sidepanel from 'containers/Sidepanel'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { InitiativePublicByPkDocument, InitiativePublicByPkQuery } from 'generated'
import DefaultInitiativeCover from '@assets/images/wecity_chat_512.png'
import { GetServerSideProps } from 'next'

import {
  getNhostSession,
  useAccessToken,
  useAuthenticated,
  useUserData
} from '@nhost/nextjs'

export default function DynamicInitiative(props:InitiativeProps & NhostProps) {
  const isAuthenticated = useAuthenticated()
  const user = useUserData()
  const accessToken = useAccessToken()

  const router = useRouter()
  const layout = useLayout()

  if (!isAuthenticated) {
    return <div>User it not authenticated</div>
  }

  const name = props.initiative?.name||'Initiative'
  const description = 
    props.initiative?.infos[0].problem? (props.initiative?.infos[0].problem + '\n'):'' + 
    props.initiative?.infos[0].goal? (props.initiative?.infos[0].goal + '\n'):'' + 
    props.initiative?.infos[0].context||''
    ||'Initiative from Wecity platform'
  const image = props.initiative?.image

  return <> 
    <Head>
      <title>{`${name} | Wecity`}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="article" />
      <meta property="og:image" content={image? image+'?w=500&h=500&q=90' :DefaultInitiativeCover.src} />
      <meta property="og:title" content={name} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Wecity" />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content={name} />
      <meta property="twitter:description" content={description} />
    </Head>
    {layout==='mobile' && <Burger style={{marginLeft:'1.5rem'}}/>}
    <Sidepanel/>
    {/* <FixedBottom> */}
      <ContentWrapper>
        <Initiative initiative={props.initiative}/>
      </ContentWrapper>
    {/* </FixedBottom> */}
  </>
}

export const getServerSideProps:GetServerSideProps = async (ctx) => {
  const nhostSession = await getNhostSession(NHOST_BACKEND_URL, ctx)

  const { req:{ cookies }, res, query } = ctx
  let initiative: InitiativePublicByPkQuery['initiative'] | undefined
  
  if(query.id){
    initiative = (await client.query<InitiativePublicByPkQuery | undefined>({
      query: InitiativePublicByPkDocument,
      variables:{id: query.id},
    })).data?.initiative;
  }

  const translation = await loadTranslation(
    ctx.locale!,
    process.env.NODE_ENV === 'production'
  )

  return { props: { initiative, translation, nhostSession } }
}
