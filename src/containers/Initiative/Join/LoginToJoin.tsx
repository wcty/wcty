import { useI18n } from "common";
import Button from "components/Button";
import { useRouter } from "next/router";
import { Container, ButtonContainer, TextContainer, Form } from "./styles";
import Cookies from 'universal-cookie';
const cookies = new Cookies();


export default function LoginToJoin() {
  const router = useRouter();
  const i18n = useI18n();

  return <Container>
    <Form>
      <br/><br/>
      <TextContainer>{i18n('login_or_register_full')}</TextContainer>
      <ButtonContainer>
        <Button
          size='medium'
          customType='primary'
          onClick={(e)=>{
            e.preventDefault()
            const { pathname, query } = router
            cookies.set('callbackUrl', { pathname, query }, { path: '/' });   
            router.push('/login');
          }}>{i18n('register')}</Button>
        <Button
          size='medium'
          customType='secondary'
          onClick={(e)=>{
            e.preventDefault()
            const { pathname, query } = router
            cookies.set('callbackUrl', { pathname, query }, { path: '/' });   
            router.push('/login');
          }}>{i18n('login')}</Button>
      </ButtonContainer>
    </Form>
  </Container>
}
