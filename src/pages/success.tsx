import { useEffect } from "react";
import { useRouter } from 'next/router'
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export default function AuthSuccess(){
  const router = useRouter()
  
  useEffect(()=>{
    const callbackUrl = cookies.get('callbackUrl');
    console.log(callbackUrl)
    if(callbackUrl){
      router.push(callbackUrl)
      //cookies.remove('callbackUrl')
    }else{
      router.push('/',undefined,{shallow:true})
    }
  },[])
  return null
}