import { useEffect } from "react";
import { useRouter } from 'next/router'

export default function AuthSuccess(){
  const history = useRouter()
  
  useEffect(()=>{
    const callbackUrl = localStorage.getItem('callbackUrl');
    if(callbackUrl){
      history.push(callbackUrl)
      localStorage.removeItem('callbackUrl')
    }else{
      history.push('/')
    }
  },[])
  return null
}