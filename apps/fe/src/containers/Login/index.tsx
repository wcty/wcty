import { CenterPanel } from "@ui";
import { auth, insert, useLayout } from 'common';
import { useState } from "react";
import { Button, FormControl, Header } from "./styles";
import { useRouter } from "next/router";
import Cookies from 'universal-cookie'
import {ReactComponent as GoogleIcon} from '@assets/icons/google.svg'
import {ReactComponent as FbIcon} from '@assets/icons/fb.svg'
import {ReactComponent as EmailIcon} from '@assets/icons/email.svg'
import { Trans } from '@lingui/macro'
import { Divider } from "./styles";
import Link from "next/link";
import { Text } from '@ui'

const cookies = new Cookies()


export default function Login (){
  const router = useRouter()
  const loginMethod = cookies.get('loginMethod')

  return (
    <CenterPanel onClose={()=>{console.log('redirect'); router.push('/')}}>
        <Header>
          <Trans>Welcome back!</Trans>
        </Header>
        {loginMethod && <Text mt="0rem">
          <Trans>Last login on this device was via</Trans> {' ' + loginMethod}.
        </Text>}
      <FormControl>
          {insert([
          <Button 
            key="Google"
            id="Google"
            onClick={(e)=>{
              e.preventDefault()
              cookies.set('loginMethod', 'Google', { path: '/' });
              auth.login({ provider: 'google' })
          }}> 
              <GoogleIcon/>
              <Text semibold><Trans>Log in with Google</Trans></Text>
          </Button>,
          <Button 
            key="Facebook"
            id="Facebook"
            onClick={(e)=>{
              e.preventDefault() 
              cookies.set('loginMethod', 'Facebook', { path: '/' });     
              auth.login({ provider: 'facebook' })
          }}>
            <FbIcon/>
            <Text semibold><Trans>Log in with Facebook</Trans></Text>
          </Button>,
          <Button 
            key="Email"
            id="Email"
            onClick={(e)=>{
              e.preventDefault()  
              cookies.set('loginMethod', 'Email', { path: '/' });         
              router.push('/login/email')
          }}>
            <EmailIcon/>
            <Text semibold><Trans>Log in with Email</Trans></Text>
          </Button> ].sort((a,b)=>{
            return b.props.id===(loginMethod || 'Email')?1:-1
          }), 1,<Divider key="divider"/>)}
          <Text mt="3rem">
            <Trans>No account? </Trans> <Link href="/register"><a><Trans>Create one</Trans></a></Link>
          </Text>
          <Text mt="3rem">
            <Trans>
              Click "Log In" to agree to Wecity's <a href="/privacy_policy.pdf">Terms of Service</a>
              and acknowledge that Wecity's <a href="/privacy_policy.pdf">Privacy Policy</a> applies to you.
            </Trans>
          </Text>
        </FormControl>

    </CenterPanel>
  )
}

