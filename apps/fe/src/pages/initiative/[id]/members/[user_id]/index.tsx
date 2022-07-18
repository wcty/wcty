import { loadTranslation, NhostProps, NHOST_BACKEND_URL, useLayout } from 'common'
import { Burger, ContentWrapper } from 'styles'
import Sidepanel from 'containers/Sidepanel'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { useMemberPageQuery } from 'generated'
import DefaultInitiativeCover from '@assets/images/wecity_chat_512.png'
import { GetServerSideProps } from 'next'
import { FixedBottom } from 'react-fixed-bottom'
import { useEffect } from 'react'
import Cookie from 'universal-cookie'
import UserProfile from 'containers/UserProfile'
import {
  getNhostSession,
  useAccessToken,
  useAuthenticated,
  useUserData
} from '@nhost/nextjs'

const cookies = new Cookie()

export default function DynamicUser(props:NhostProps) {
  const isAuthenticated = useAuthenticated()
  const user = useUserData()
  const accessToken = useAccessToken()
  const router = useRouter()
  const {pathname, query} = router
  const layout = useLayout()
  
  useEffect(()=>{
    if(user===null){
      cookies.set('callbackUrl', {pathname, query}, { path: '/' });
      router.push('/login')
    }
  },[user])

  const { id, user_id } = router.query

  let userInfo = undefined, memberInfo = undefined

  const { data } = useMemberPageQuery({
    variables: { user_id, id },
    ssr: false,
    skip: !user
  })

  if(data?.member){
    const { user, ...member } = data.member[0]
    userInfo = user
    memberInfo = member
  }

  const name = `${userInfo?.display_name}`
  const description = `Account page of the We.City user "${userInfo?.display_name||''}"`

  if(userInfo===undefined){
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
        {userInfo && <UserProfile {...{userInfo, memberInfo }}/>}
      </ContentWrapper>
    </FixedBottom>
  </>
}

export const getServerSideProps:GetServerSideProps = async (ctx) => {
  const nhostSession = await getNhostSession(NHOST_BACKEND_URL, ctx)

  const translation = await loadTranslation(
    ctx.locale!,
    process.env.NODE_ENV === 'production'
  )

  return { props: { translation, nhostSession } }
}
