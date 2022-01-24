import { useEffect } from "react";
import { useRouter } from 'next/router'
import Cookies from 'universal-cookie';
import { GetStaticProps } from "next";
import { loadTranslation } from "common";
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
  
  useEffect(()=>{
    const callbackUrl = cookies.get('callbackUrl');
    if(callbackUrl){
      setTimeout(()=>router.push(callbackUrl), 5000)
      // console.log(callbackUrl)
      // cookies.remove('callbackUrl')
    }else{
      setTimeout(()=>router.push('/'), 5000)
    }
  },[])
  return null
}