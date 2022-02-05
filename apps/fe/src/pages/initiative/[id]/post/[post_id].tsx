import { loadTranslation, useLayout, useUser } from 'common'
import { Burger, ContentWrapper } from 'styles'
import Sidepanel from 'containers/Sidepanel'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { usePostPageQuery } from 'generated'
import DefaultInitiativeCover from '@assets/images/wecity_chat_512.png'
import { GetServerSideProps } from 'next'
import { FixedBottom } from 'react-fixed-bottom'
import PostThread from 'containers/PostThread'
import { useEffect } from 'react'
import Cookie from 'universal-cookie'

const cookies = new Cookie()

export default function DynamicInitiative() {
  const router = useRouter()
  const {pathname, query} = router
  const layout = useLayout()
  const user = useUser()
  

  useEffect(()=>{
    console.log('user', user)
    if(user===null){
      cookies.set('callbackUrl', {pathname, query}, { path: '/' });
      router.push('/login')
    }
  },[user])


  const { id, post_id } = router.query
  const { data:{ post }={ post: null } } = usePostPageQuery({
    variables: {
      post_id,
      initiative_id: id
    },
    ssr: false,
    skip: !user
  })

  const name = post?.initiative.name||'Initiative'
  const description = 
    post?.initiative?.infos[0].problem? (post?.initiative?.infos[0].problem + '\n'):'' + 
    post?.initiative?.infos[0].goal? (post?.initiative?.infos[0].goal + '\n'):'' + 
    post?.initiative?.infos[0].context||''
    ||'Initiative from Wecity platform'
  const image = post?.initiative?.image

  if(!user){
    return <>Loading...</>
  }


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
    <FixedBottom>
      <ContentWrapper>
        <PostThread {...{post}}/>
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
