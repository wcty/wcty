import { CenterPanel } from "components/CenterPanel";
import { auth, useLayout } from 'common';
import { useState } from "react";
import { Button, FormControl, TextField, Label, Header, Text } from "./styles";
import { useRouter } from "next/router";
import Cookies from 'universal-cookie'
import { Trans } from '@lingui/macro'

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
        router.push('/')
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
  const [credentials, setCredentials] = useState({email:'', password:''})
  const router = useRouter()
  const layout = useLayout()
  const loginMethod = cookies.get('loginMethod')

  //cookies.set('loginMethod', lm, { path: '/' });

  return (
    <CenterPanel onClose={()=>router.back()}>
        <Header>
          <Trans>Welcome back!</Trans>
        </Header>
        {loginMethod && <Text>
          Last login from this device was made with Google.
        </Text>}
      <FormControl>
        <Label id="email">
          Your email:
        </Label>
        <TextField 
          id="email" 
          type="text"
          value={credentials.email}
          onChange={(e)=>setCredentials({...credentials, email:e.target.value})}
        />
        <Label id="password" >
          Your password:
        </Label>
        <TextField 
          id="password" 
          type="password" 
          value={credentials.password}
          onChange={(e)=>setCredentials({...credentials, password:e.target.value})}
        />
          <div>
          {layout==='desktop'? 
            <Button>
              <LoginButton credentials={credentials}/>
              <RegisterButton credentials={credentials}/>
            </Button>:
          <>
            <Button>
              <LoginButton credentials={credentials}/>
            </Button>
            <Button>
              <RegisterButton credentials={credentials}/>
            </Button>
          </>
          }
          <Button>
            <button onClick={(e)=>{
              e.preventDefault()
              auth.login({ provider: 'google' })
            }}>
              <span>Google</span>
            </button>
            <button onClick={(e)=>{
              e.preventDefault()      
              auth.login({ provider: 'facebook' })}}>
              <span>Facebook</span>
            </button>
          </Button>
          </div>
        </FormControl>
    </CenterPanel>
  )
}

