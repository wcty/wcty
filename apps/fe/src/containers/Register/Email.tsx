import { CenterPanel } from "@ui";
import { atoms, useLayout } from 'common';
import { useEffect, useState } from "react";
import { Button, FormControl, TextField, Label, Header } from "./styles";
import { useRouter } from "next/router";
import Cookies from 'universal-cookie'
import { Trans } from '@lingui/macro'
import {ReactComponent as ArrowLeft} from '@assets/icons/arrow-left2.svg'
import Link from "next/link";
import { useRecoilState } from "recoil";
import { Text } from '@ui'
import { useSignUpEmailPassword } from "@nhost/nextjs";

const cookies = new Cookies()


export default function RegisterWithEmail (){
  const [credentials, setCredentials] = useRecoilState(atoms.credentialsLogin)
  const router = useRouter()

  const { signUpEmailPassword, isLoading, isSuccess, needsEmailVerification, isError, error } = useSignUpEmailPassword()

  if(isSuccess){
    router.push('/register/check-email')
  }
  
  return (
    <CenterPanel onClose={()=>router.push('/')}>
        <Header>
          <Trans>Join with email</Trans>
        </Header>
        <Text mb="2rem">
          <Trans>Enter email and password to create an account</Trans>
        </Text>
      <FormControl>
        <TextField 
          id="email" 
          type="text"
          placeholder="Your e-mail"
          value={credentials.email||''}
          onChange={(e)=>setCredentials({...credentials, email:e.target.value})}
        />
        <TextField 
          mt='1rem'
          id="password" 
          type="password"
          placeholder="Your password"
          value={credentials.password||''}
          onChange={(e)=>setCredentials({...credentials, password:e.target.value})}
        />
        <Button style={{background: 'black'}}
          onClick={(e)=>{
            e.preventDefault()
            if( credentials.email && credentials.password ) {
              signUpEmailPassword(credentials.email, credentials.password)
            }
          }}>
          <Text c="backgroundLighter" semibold ><Trans>Continue</Trans></Text>
        </Button>
        </FormControl>
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

