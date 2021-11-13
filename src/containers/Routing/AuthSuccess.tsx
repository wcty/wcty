import { useRouter } from "next/router";
import { useEffect } from "react";

export default function AuthSuccess(){
  const router = useRouter()
  
  useEffect(()=>{
    const callbackUrl = localStorage.getItem('callbackUrl');
    if(callbackUrl){
      router.push(callbackUrl)
      localStorage.removeItem('callbackUrl')
    }else{
      router.push('/')
    }
  },[])
  return null
}
