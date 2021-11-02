import { CenterPanel } from "components/CenterPanel";
import { auth, useI18n, useLayout } from 'common';
import { useState } from "react";
import { useHistory } from "react-router";
import { ButtonGroup, FormControl, TextField, Label } from "./styles";

const LoginButton = ({credentials={email:'', password:''}})=>{
  const history = useHistory()

  return (
    <button onClick={(e)=>{
      e.preventDefault()
      if( credentials.email && credentials.password ) {
        auth.login(credentials).then(res=>{
          if(res.user) {
            console.log(res)
            history.goBack()
          }
        })
      }
    }}>
    <span>Login</span>
  </button>
  )
}

const RegisterButton = ({credentials={email:'', password:''}})=>{
  const history = useHistory()

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
  const history = useHistory()
  const layout = useLayout()

  return <CenterPanel onClose={()=>history.goBack()}>
    <h2 style={{marginTop:'2rem'}}>{i18n('login_or_register')}</h2>
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
            auth.login({ provider: 'google' })}}>
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
}