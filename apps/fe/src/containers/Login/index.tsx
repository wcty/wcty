import { CenterPanel } from "components/CenterPanel";
import { auth, endpoint, useI18n, useLayout } from 'common';
import { useState } from "react";
import { Button, FormControl, TextField, Label, Header, Text } from "./styles";
import BurgerFab from "containers/FloatPanel/BurgerFab";
import { useRouter } from "next/router";
import Cookies from 'universal-cookie'
import {ReactComponent as GoogleIcon} from 'assets/icons/google.svg'
import {ReactComponent as FbIcon} from 'assets/icons/fb.svg'
import {ReactComponent as EmailIcon} from 'assets/icons/email.svg'

const cookies = new Cookies()

const LoginButton = ({credentials={email:'', password:''}})=>{
  const router = useRouter()
  return (
    <button onClick={async (e)=>{
      e.preventDefault()
      if( credentials.email && credentials.password ) {
        try{
          await auth.login(credentials)
        } catch (error) {
          console.log(error);
          return alert("login failed");
        }
        router.push('/',undefined,{shallow:true})
      }
    }}>
      <span>Login</span>
    </button>
  )
}

const RegisterButton = ({credentials={email:'', password:''}})=>{

  return (
    <button onClick={(e)=>{
        e.preventDefault()
        if( credentials.email && credentials.password ) {
          auth.register(credentials)
        }
      }}>
        <span>Register</span>
    </button>
  )
}

export default function Login (){
  const i18n = useI18n()
  const [credentials, setCredentials] = useState({email:'', password:''})
  const router = useRouter()
  const layout = useLayout()
  const loginMethod = cookies.get('loginMethod')

  //cookies.set('loginMethod', lm, { path: '/' });

  return (
    <CenterPanel onClose={()=>router.back()}>
        <Header>
          {i18n('welcome_back')}
        </Header>
        {loginMethod && <Text mt="5rem">
          Last login from this device was made with Google.
        </Text>}
      <FormControl>
          <Button 
            onClick={(e)=>{
              e.preventDefault()
              auth.login({ provider: 'google' })
          }}> 
              <GoogleIcon/>
              <Text semibold>Log in with Google</Text>
          </Button>
          <Button 
            onClick={(e)=>{
              e.preventDefault()      
              auth.login({ provider: 'facebook' })
          }}>
            <FbIcon/>
            <Text semibold>Log in with Facebook</Text>
          </Button>
          <Button 
            onClick={(e)=>{
              e.preventDefault()      
              router.push('/login/email')
          }}>
            <EmailIcon/>
            <Text semibold>Log in with Email</Text>
          </Button>
        </FormControl>
    </CenterPanel>
  )
}

