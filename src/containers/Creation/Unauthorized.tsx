import Button from "components/Button";
import { FloatingContainer } from "./styles";
import { ReactComponent as Cross } from 'assets/icons/cross.svg'
import { useRouter } from "next/router";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export default function Creation() {

  const router = useRouter()
  return (
    <FloatingContainer>
      <button onClick={(e)=>{
        e.preventDefault()
        router.push('/')
      }}>
        <Cross />
      </button>
      <div>
      Для того, щоб створити ініціативу, вам необхідно зареєструватися або увійти в обліковий запис
      </div>
      <div>
        <Button size="medium" customType='primary' onClick={
          (e)=>{
            const { pathname, query } = router
            cookies.set('callbackUrl', { pathname, query }, { path: '/' }); 
            e.preventDefault()
            router.push('/login')
          }
        }>Зареєструватися</Button>
        <Button size='medium' customType='secondary' onClick={(e)=>{
          const { pathname, query } = router
          cookies.set('callbackUrl', { pathname, query }, { path: '/' }); 
          e.preventDefault()
          router.push('/login')
        }} > Увійти</Button>
      </div>
    </FloatingContainer>
  );
}