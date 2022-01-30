import { Button } from "@ui";
import { FloatingContainer } from "./styles";
import { ReactComponent as Cross } from '@assets/icons/cross.svg'
import { useRouter } from "next/router";
import Cookie from 'universal-cookie'
import { Trans } from '@lingui/macro'

const cookies = new Cookie()

export default function Creation() {
  const router = useRouter()
  const { pathname, query } = router
  return (
    <FloatingContainer>
      <button onClick={(e)=>{
        e.preventDefault()
        router.push('/')
      }}>
        <Cross />
      </button>
      <div>
        <Trans>In order to join or create an initiative, you need to register or log in to your own account</Trans>
      </div>
      <div>
        <Button onClick={
          (e)=>{
            cookies.set('callbackUrl', {pathname, query}, { path: '/' });
            e.preventDefault()
            router.push('/login')
          }
        }><Trans>Register</Trans></Button>
        <Button customType='outlined' onClick={(e)=>{
          cookies.set('callbackUrl', {pathname, query}, { path: '/' });
          e.preventDefault()
          router.push('/login')
        }}><Trans>Login</Trans></Button>
      </div>
    </FloatingContainer>
  );
}