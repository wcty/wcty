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
  const layout = useLayout()
  const loginMethod = cookies.get('loginMethod')
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
          <Trans>Join with email</Trans>
        </Header>
        <Text mb="2rem">
          <Trans>Enter your email address to create an account</Trans>
        </Text>
      <FormControl>
        <TextField 
          id="email" 
          type="text"
          placeholder="Your e-mail"
          value={credentials.email}
          onChange={(e)=>setCredentials({...credentials, email:e.target.value})}
        />
        <Button style={{background: 'black'}}
          onClick={(e)=>{
            e.preventDefault()
            if( credentials.email && credentials.password ) {
              auth.register(credentials).then(()=>{
                router.push('/login/check-email')
              }).catch((err)=>{
                setError(err)
              })
            }
          }}>
          <Text color="white" semibold ><Trans>Continue</Trans></Text>
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

