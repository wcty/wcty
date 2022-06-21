import { CenterPanel } from "@ui";
import { atoms, auth, useLayout } from 'common';
import { useEffect, useState } from "react";
import { Button, FormControl, TextField, Label, Header } from "./styles";
import { useRouter } from "next/router";
import Cookies from 'universal-cookie'
import { Trans } from '@lingui/macro'
import {ReactComponent as ArrowLeft} from '@assets/icons/arrow-left2.svg'
import Link from "next/link";
import { useRecoilState } from "recoil";
import { Text } from '@ui'

const cookies = new Cookies()


export default function RegisterWithEmail (){
  const [credentials, setCredentials] = useRecoilState(atoms.credentialsLogin)
  const router = useRouter()
  const withPassword = !!router.query?.withPassword
  const [error, setError] = useState<any>('')


  return (
    <CenterPanel onClose={()=>router.push('/')}>
        <Header>
          <Trans>Join with email</Trans>
        </Header>
        <Text mb="2rem">
        {withPassword ?
          <Trans>Enter email and password to create an account</Trans>:
          <Trans>Enter your email address to create an account</Trans>}
        </Text>
      <FormControl>
        <TextField 
          id="email" 
          type="text"
          placeholder="Your e-mail"
          value={credentials.email||''}
          onChange={(e)=>setCredentials({...credentials, email:e.target.value})}
        />
        {withPassword && <TextField 
          mt='1rem'
          id="password" 
          type="password"
          placeholder="Your password"
          value={credentials.password||''}
          onChange={(e)=>setCredentials({...credentials, password:e.target.value})}
        />}
        <Button style={{background: 'black'}}
          onClick={(e)=>{
            e.preventDefault()
            if( credentials.email ) {
              auth.register(credentials).then(()=>{
                withPassword?
                  router.push('/register/check-email'):
                  router.push('/register/check-email')
              }).catch((err)=>{
                setError(err)
              })
            }
          }}>
          <Text c="backgroundLighter" semibold ><Trans>Continue</Trans></Text>
        </Button>
        </FormControl>
        <Text mt="1rem">
        {!withPassword ?
            <a href="#" onClick={()=>router.push('/register/email?withPassword=1', undefined, {shallow:true})}><Trans>Register with password instead</Trans></a>:
            <a href="#" onClick={()=>router.push('/register/email', undefined, {shallow:true})}><Trans>Register without password instead</Trans></a>}
        </Text>
        <Link href="/register" >
          <a>
            <Text mt="5rem" style={{display:'flex', alignItems:'center'}}>
              <ArrowLeft/> <Trans>All sign up options</Trans>
            </Text>
          </a>
        </Link>
    </CenterPanel>
  )
}

