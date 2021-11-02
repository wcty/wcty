import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function AuthSuccess(){
  const history = useHistory()
  
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
