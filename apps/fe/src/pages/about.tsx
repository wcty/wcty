import { getLangServerSideProps, loadTranslation, ServerI18nProps, useLayout, useServerI18n } from "common"
import Head from "next/head"
import { useRouter } from "next/router"
import frog_wcty from "assets/images/frog_wcty.png"
import { Burger, ContentWrapper } from 'styles'
import Sidepanel from "containers/Sidepanel"
import { FixedBottom } from 'react-fixed-bottom'
import About from "components/About"
import { GetStaticProps } from "next"

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


export default function AboutPage() { 
  const router = useRouter()
  const layout = useLayout()

  return <> 
    <Head>
      <title>{`About | Wecity`}</title>
      <meta name="description" content="Partners and sponsors of Wecity" />
      <meta property="og:type" content="article" />
      <meta property="og:image" content={frog_wcty} />
      <meta property="og:title" content="About Wecity" />
      <meta property="og:description" content="Partners and sponsors of Wecity" />
      <meta property="og:site_name" content="Wecity" />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content="About Wecity"/>
      <meta property="twitter:description" content="Partners and sponsors of Wecity" />
    </Head>
    {layout==='mobile' && <Burger style={{marginLeft:'1.5rem'}}/>}
    <Sidepanel/>
    <FixedBottom>
      <ContentWrapper>
        <About/>
      </ContentWrapper>
    </FixedBottom>
  </>
}
