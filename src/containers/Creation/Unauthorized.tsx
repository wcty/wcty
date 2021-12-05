import Button from "components/Button";
import { FloatingContainer } from "./styles";
import { ReactComponent as Cross } from 'assets/icons/cross.svg'
import { useI18n } from "common";
import { useRouter } from "next/router";
import Cookie from 'universal-cookie'

const cookies = new Cookie()

export default function Creation() {
  const i18n = useI18n();
  const router = useRouter()
  const { pathname, query } = router
  return (
    <FloatingContainer>
      <button onClick={(e)=>{
        e.preventDefault()
        router.push('/',undefined,{shallow:true})
      }}>
        <Cross />
      </button>
      <div>
        {i18n('login_or_register_full')}
      </div>
      <div>
        <Button onClick={
          (e)=>{
            cookies.set('callbackUrl', {pathname, query}, { path: '/' });
            e.preventDefault()
            router.push('/login')
          }
        }>{i18n('register')}</Button>
        <Button customType='secondary' onClick={(e)=>{
          cookies.set('callbackUrl', {pathname, query}, { path: '/' });
          e.preventDefault()
          router.push('/login')
        }}>{i18n('login')}</Button>
      </div>
    </FloatingContainer>
  );
}