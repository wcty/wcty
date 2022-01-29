import { useEffect } from "react";
import { useRouter } from 'next/router'
import Cookies from 'universal-cookie';
import { GetStaticProps } from "next";
import { auth, loadTranslation } from "common";
const cookies = new Cookies();

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


export default function AuthSuccess(){
  const router = useRouter()
  const refresh_token = useRouter().query.refresh_token as string

  useEffect(()=>{
      const callbackUrl = cookies.get('callbackUrl');
      console.log('refresh_token', refresh_token)

      if(callbackUrl){
        router.push(callbackUrl)
        // console.log(callbackUrl)
        // cookies.remove('callbackUrl')
      }else{
        router.push('/')
      }


  },[refresh_token])
  return null
}