import { loadTranslation, useLayout, useUser } from 'common'
import { Burger, ContentWrapper } from 'styles'
import Sidepanel from 'containers/Sidepanel'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { useMembersPageQuery } from 'generated'
import DefaultInitiativeCover from '@assets/images/wecity_chat_512.png'
import { GetServerSideProps } from 'next'
import { FixedBottom } from 'react-fixed-bottom'
import PostThread from 'containers/PostThread'
import { useEffect } from 'react'
import Cookie from 'universal-cookie'
import Members from 'containers/Members'

const cookies = new Cookie()

export default function DynamicInitiativeMembers() {
  const router = useRouter()
  const {pathname, query} = router
  const layout = useLayout()
  const user = useUser()
  

  useEffect(()=>{
    if(user===null){
      cookies.set('callbackUrl', {pathname, query}, { path: '/' });
      router.push('/login')
    }
  },[user])


  const { id } = router.query
  const { data } = useMembersPageQuery({
    variables: {
      initiative_id: id,
    },
    ssr: false,
    skip: !user
  })

  const name = `Initiative members in "${data?.initiative?.name}"`
  const description = `Members and their roles in "${data?.initiative?.name||''}" initiative at Wecity platform`

  if(user===undefined){
    return <>Loading...</>
  }


  return <> 
    <Head>
      <title>{`${name} | Wecity`}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="article" />
      <meta property="og:image" content={DefaultInitiativeCover.src} />
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
        {data && <Members {...{data}}/>}
      </ContentWrapper>
    </FixedBottom>
  </>
}

export const getServerSideProps:GetServerSideProps = async (ctx) => {

  const translation = await loadTranslation(
    ctx.locale!,
    process.env.NODE_ENV === 'production'
  )

  return { props: { translation } }
}
