import { client, ServerI18nProps, useLayout, useServerI18n, useUser } from 'common'
import Initiative, { InitiativeProps } from 'containers/Initiative'
import { Burger, ContentWrapper } from 'styles'
import Sidepanel from 'containers/Sidepanel'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { DictionaryDocument, DictionaryQuery, InitiativePublicByPkDocument, InitiativePublicByPkQuery } from 'generated'
import DefaultInitiativeCover from 'assets/images/wecity_chat_512.png'
import { GetServerSideProps } from 'next'
import { FixedBottom } from 'react-fixed-bottom'

export default function DynamicInitiative(props:ServerI18nProps&InitiativeProps) {
  useServerI18n(props)
  const router = useRouter()
  const layout = useLayout()
  const name = props.initiative?.name||'Initiative'
  const description = props.initiative?.description||props.initiative?.infos[0].problem||'Initiative from Wecity platform'
  const image = props.initiative?.image

  return <> 
    <Head>
      <title>{`${name} | Wecity`}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="article" />
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
    <FixedBottom>
      <ContentWrapper>
        <Initiative initiative={props.initiative}/>
      </ContentWrapper>
    </FixedBottom>
  </>
}

export const getServerSideProps:GetServerSideProps = async (ctx) => {
  const { req:{ cookies }, res, query } = ctx
  let serverDictData: DictionaryQuery | undefined
  let initiative: InitiativePublicByPkQuery['initiative'] | undefined

  if(cookies.lang){
    serverDictData = (await client.query<DictionaryQuery | undefined>({
      query: DictionaryDocument,
      variables:{[cookies.lang]: true},
    })).data;
  } 
  if(query.id){
    initiative = (await client.query<InitiativePublicByPkQuery | undefined>({
      query: InitiativePublicByPkDocument,
      variables:{id: query.id},
    })).data?.initiative;
  }

  return { props: { serverDictData, lang:cookies.lang, initiative } }
}