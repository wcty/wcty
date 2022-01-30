import { Button } from "@ui";
import { useRouter } from "next/router";
import { Container, ButtonContainer, TextContainer, Form } from "./styles";
import Cookies from 'universal-cookie';
import { Trans } from '@lingui/macro'

const cookies = new Cookies();


export default function LoginToJoin() {
  const router = useRouter();

  return <Container>
    <Form>
      <br/><br/>
      <TextContainer><Trans>In order to join or create an initiative, you need to register or log in to your own account</Trans></TextContainer>
      <ButtonContainer>
        <Button
          customSize='medium'
          customType='primary'
          onClick={(e)=>{
            e.preventDefault()
            const { pathname, query } = router
            cookies.set('callbackUrl', { pathname, query }, { path: '/' });   
            router.push('/login');
          }}><Trans>Register</Trans></Button>
        <Button
          customSize='medium'
          customType='outlined'
          onClick={(e)=>{
            e.preventDefault()
            const { pathname, query } = router
            cookies.set('callbackUrl', { pathname, query }, { path: '/' });   
            router.push('/login');
          }}><Trans>Login</Trans></Button>
      </ButtonContainer>
    </Form>
  </Container>
}
