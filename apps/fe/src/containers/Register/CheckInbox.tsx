import { CenterPanel } from "@ui";
import { atoms, auth, useLayout } from 'common';
import { useState } from "react";
import { Button, FormControl, TextField, Label, Header } from "./styles";
import { useRouter } from "next/router";
import Cookies from 'universal-cookie'
import { Trans } from '@lingui/macro'
import Pigeon from '@assets/images/pigeon-02.png'
import { useRecoilState } from "recoil";
import Image from "next/image";
import { Text } from '@ui'

const cookies = new Cookies()


export default function RegisterWithEmail() {
  const [credentials, setCredentials] = useRecoilState(atoms.credentialsLogin)
  const router = useRouter()
  const layout = useLayout()
  const loginMethod = cookies.get('loginMethod')

  //cookies.set('loginMethod', lm, { path: '/' });

  return (
    <CenterPanel onClose={() => router.push('/')}>
      <Header>
        <Trans>Check your Inbox</Trans>
      </Header>
      <Text mb="2rem">
        <Trans>
          Click the link we&apos;ve sent to {credentials.email ? credentials.email : 'your email'} to complete your account set-up.
        </Trans>
      </Text>
      <Button style={{ background: 'black', padding: '0 2rem', marginBottom: '2rem' }}
        onClick={(e) => {
          e.preventDefault()
          router.push('/')
        }}>
        <Text c="backgroundLighter" semibold ><Trans>Ok</Trans></Text>
      </Button>
      <Image src={Pigeon} alt='Graphic pigeon' />
    </CenterPanel>
  )
}

