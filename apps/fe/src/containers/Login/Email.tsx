import { CenterPanel } from "@ui";
import { atoms, auth, useLayout } from 'common';
import { useState, useEffect } from "react";
import { Button, FormControl, TextField, Label, Header } from "./styles";
import { useRouter } from "next/router";
import Cookies from 'universal-cookie'
import { Trans } from '@lingui/macro'
import {ReactComponent as ArrowLeft} from '@assets/icons/arrow-left2.svg'
import Link from "next/link";
import { useRecoilState } from "recoil";
import { Text } from '@ui'

const cookies = new Cookies()


export default function Login (){
  const [credentials, setCredentials] = useRecoilState(atoms.credentialsLogin)
  const router = useRouter()
  const withPassword = !!router.query?.withPassword

  const [error, setError] = useState<any>('')
  //cookies.set('loginMethod', lm, { path: '/' });
  useEffect(()=>{
    if(error){
      console.log('Error: ', error)
    }
  },[error])
  
  return (
    <CenterPanel onClose={()=>router.push('/')}>
        <Header>
          <Trans>Login with email</Trans>
        </Header>
        <Text mb="2rem">
          {withPassword ?
          <Trans>Enter email and password to log in</Trans>:
          <Trans>Enter your email address to log in</Trans>}
        </Text>
      <FormControl>
        <TextField 
          id="email" 
          type="text"
          placeholder="Your e-mail"
          value={credentials.email}
          onChange={(e)=>setCredentials({...credentials, email:e.target.value})}
        />
        {withPassword && <TextField 
          mt='1rem'
          id="password" 
          type="password"
          placeholder="Your password"
          value={credentials.password}
          onChange={(e)=>setCredentials({...credentials, password:e.target.value})}
        />}
        <Button style={{background: 'black'}}
          onClick={(e)=>{
            e.preventDefault()
            if( credentials.email ) {
              auth.login(credentials).then(()=>{
                withPassword?
                  router.push('/'):
                  router.push('/login/check-email')
              }).catch((err)=>{
                setError(err)
              })
            }
          }}>
          <Text c="backgroundLighter" semibold >
              <Trans>Continue</Trans>
          </Text>
        </Button>
        </FormControl>
        <Text mt="1rem">
        {!withPassword ?
            <a href="#" onClick={()=>router.push('/login/email?withPassword=1', undefined, {shallow:true})}><Trans>Login with password instead</Trans></a>:
            <a href="#" onClick={()=>router.push('/login/email', undefined, {shallow:true})}><Trans>Login without password instead</Trans></a>}
        </Text>
        <Link href="/login" >
          <a>
            <Text mt="5rem" style={{display:'flex', alignItems:'center'}}>
              <ArrowLeft/> <Trans>All log in options</Trans>
            </Text>
          </a>
        </Link>
    </CenterPanel>
  )
}

