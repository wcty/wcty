import { CenterPanel } from "@ui";
import { atoms, auth, useLayout } from 'common';
import { useState } from "react";
import { Button, FormControl, Header, HeaderCover } from "./styles";
import { useRouter } from "next/router";
import Cookies from 'universal-cookie'
import {ReactComponent as GoogleIcon} from '@assets/icons/google.svg'
import {ReactComponent as FbIcon} from '@assets/icons/fb.svg'
import {ReactComponent as EmailIcon} from '@assets/icons/email.svg'
import {ReactComponent as AppleIcon} from '@assets/icons/apple-logo.svg'

import { Trans } from '@lingui/macro'
import Link from "next/link";
import Pigeon from '@assets/images/pigeon-03.png'
import { Text } from '@ui'


const cookies = new Cookies()


export default function Register (){
  const router = useRouter()
  const layout = useLayout()
  const loginMethod = cookies.get('loginMethod')

  return (
    <CenterPanel onClose={()=>router.push('/')}>
        <HeaderCover bg={Pigeon.src}>
          <h3><Trans>Join Wecity</Trans></h3>
        </HeaderCover>
        
      <FormControl>
          <Button 
            id="Google"
            onClick={(e)=>{
              e.preventDefault()
              cookies.set('loginMethod', 'Google', { path: '/' });
              auth.login({ provider: 'google' })
          }}> 
              <GoogleIcon/>
              <Text semibold><Trans>Sign up with Google</Trans></Text>
          </Button>
          <Button 
            id="Facebook"
            onClick={(e)=>{
              e.preventDefault() 
              cookies.set('loginMethod', 'Facebook', { path: '/' });     
              auth.login({ provider: 'facebook' })
          }}>
            <FbIcon/>
            <Text semibold><Trans>Sign up with Facebook</Trans></Text>
          </Button>
          <Button 
            id="Apple"
            onClick={(e)=>{
              e.preventDefault() 
              cookies.set('loginMethod', 'Apple', { path: '/' });     
              auth.login({ provider: 'apple' })
          }}>
            <AppleIcon/>
            <Text semibold><Trans>Sign up with Apple</Trans></Text>
          </Button>
          <Button 
            id="Email"
            onClick={(e)=>{
              e.preventDefault()  
              cookies.set('loginMethod', 'Email', { path: '/' });         
              router.push('/register/email')
          }}>
            <EmailIcon/>
            <Text semibold><Trans>Sign up with Email</Trans></Text>
          </Button>
          <Text mt="3rem">
            <Trans>Already have an account? </Trans> <Link href="/login"><a><Trans>Sign in</Trans></a></Link>
          </Text>
          <Text mt="3rem">
            <Trans>
              Click &quot;Sign Up&quot; to agree to Wecity&apos;s <a href="/privacy_policy.pdf">Terms of Service</a>
              and acknowledge that Wecity&apos;s <a href="/privacy_policy.pdf">Privacy Policy</a> applies to you.
            </Trans>
          </Text>
        </FormControl>

    </CenterPanel>
  )
}
