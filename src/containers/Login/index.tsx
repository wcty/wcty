import { CenterPanel } from "components/CenterPanel";
import { auth, endpoint, useI18n, useLayout } from 'common';
import { useState } from "react";
import { useHistory } from "react-router";
import { ButtonGroup, FormControl, TextField, Label } from "./styles";
import BurgerFab from "containers/FloatPanelMobile/BurgerFab";
import Frame, { useFrame } from 'react-frame-component'

const LoginButton = ({credentials={email:'', password:''}})=>{
  const history = useHistory()

  return (
    <button onClick={(e)=>{
      e.preventDefault()
      if( credentials.email && credentials.password ) {
        auth.login(credentials).then(res=>{
          if(res.user) {
            console.log(res)
            // history.goBack()
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
  // const { document, window:frame } = useFrame();
  
  return (
  // <Frame name='test' style={{width:'50%',height:'50%'}}>

  //     <div id="g_id_onload"
  //         data-client_id="766690753861-u0muglqq0o81pu11cg1mnm3uh4grgprp.apps.googleusercontent.com"
  //         data-login_uri="https://api-local.weee.city/auth/providers/google/callback"
  //         data-allowed_parent_origin="http://localhost:3000">
  //     </div>

      <CenterPanel onClose={()=>history.goBack()}>
              {layout==='mobile'&&<BurgerFab/>}

          <h2 style={{marginTop:'2rem'}}>
            {i18n('login_or_register')}
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
                // console.log(frame?.frames[0].location)
                // if(frame?.frames[0].location)
                // frame.frames[0].location.href = `${endpoint}/auth/providers/google`;
                //window.open(`${endpoint}/auth/providers/google`,"poop", "height=200,width=200,modal=yes,alwaysRaised=yes");

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
      // </Frame>
  )
}

