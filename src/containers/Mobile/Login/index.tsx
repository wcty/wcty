import { auth, useI18n } from 'common';
import { LangSelect } from 'components';
import { useState } from "react";
import { useHistory } from "react-router";
import { ButtonGroup, CenterPanel, FormControl, TextField, Label } from "./styles";

export default function Login (){
  const i18n = useI18n()
  const [credentials, setCredentials] = useState({email:'', password:''})
  const history = useHistory()
  
  return <CenterPanel>
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
        <ButtonGroup>
          <button onClick={(e)=>{
              e.preventDefault()
              if( credentials.email && credentials.password ) {
                auth.login(credentials)
              }
          }}>
            <span>Login</span>
          </button>
        </ButtonGroup>
        <ButtonGroup>
          <button onClick={(e)=>{
            e.preventDefault()
            if( credentials.email && credentials.password ) {
              auth.register(credentials)
            }
          }}>
            <span>Register</span>
          </button>
        </ButtonGroup>
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