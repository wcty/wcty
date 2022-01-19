import { CenterPanel } from "components/CenterPanel";
import { auth, endpoint, useI18n, useLayout } from 'common';
import { useState } from "react";
import { ButtonGroup, FormControl, TextField, Label } from "./styles";
import BurgerFab from "containers/FloatPanel/BurgerFab";
import { useRouter } from "next/router";

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
  
  return (
    <CenterPanel onClose={()=>router.back()}>
        {layout==='mobile'&&<BurgerFab/>}
        <h2 style={{marginTop:'2rem'}}>
          {i18n('login_or_register')}:
        </h2>
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
            <ButtonGroup>
              <LoginButton credentials={credentials}/>
              <RegisterButton credentials={credentials}/>
            </ButtonGroup>:
          <>
            <ButtonGroup>
              <LoginButton credentials={credentials}/>
            </ButtonGroup>
            <ButtonGroup>
              <RegisterButton credentials={credentials}/>
            </ButtonGroup>
          </>
          }
          <ButtonGroup>
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
          </ButtonGroup>
          </div>
        </FormControl>
    </CenterPanel>
  )
}

