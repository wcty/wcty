import { useUserQuery } from "../../generated"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import { auth } from "./"
import { atoms } from "../recoil"


export function useUserData(retry: boolean = false) {
  // console.log('Use User Data')

  const [user, setUser] = useRecoilState(atoms.user)
  const [user_id, setUserId] = useState<string>()

  const { data:userData } = useUserQuery({variables:{user_id}, skip: !user_id})
  const router = useRouter()

  useEffect(()=>{
    if(!user && userData && auth.isAuthenticated()){
      setUser(userData?.users_by_pk)
      if(router.pathname==='/oauth/success'){
        router.push('/')
      }
    }
  },[userData, user, auth.isAuthenticated])


  useEffect(()=>{

    let interval:NodeJS.Timer;
    let iterations = 0;

    if(retry){
      // console.log('set interval')
      interval = setInterval(Authorise, 1000)
    }else{
      Authorise()
    }

    function clear(){
      iterations = 0;
      if(retry && interval){
        clearInterval(interval)
      }
    }

    function Authorise(){
      const uid = auth.getClaim("x-hasura-user-id");
      // console.log('Authorise', uid)

      if(typeof uid==='string'){
        setUserId(uid)
        clear()
      }else if(iterations>=5){
        console.log('Exceeded retries')
        clear()
        router.push('/login')
      }else{
        // console.log('Try again', iterations)
        iterations++;
      }
    }

    auth.onAuthStateChanged(loggedIn=>{
      // console.log('auth state changed', loggedIn)
      clear()
      
      if(!loggedIn){
        setUser(null)
        setUserId(undefined)
      }else{
       Authorise()
      }
    })

  },[])

  return {user}
}
