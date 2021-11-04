import Button from "components/Button";
import { FloatingContainer } from "./styles";
import { ReactComponent as Cross } from 'assets/icons/cross.svg'
import { useHistory } from "react-router-dom";

export default function Creation() {

  const history = useHistory()
  return (
    <FloatingContainer>
      <button onClick={(e)=>{
        e.preventDefault()
        history.push('/')
      }}>
        <Cross />
      </button>
      <div>
      Для того, щоб створити ініціативу, вам необхідно зареєструватися або увійти в обліковий запис
      </div>
      <div>
        <Button size="medium" customType='primary' onClick={
          (e)=>{
            localStorage.setItem('callbackUrl', '/create-initiative');
            e.preventDefault()
            history.push('/login')
          }
        }>Зареєструватися</Button>
        <Button size='medium' customType='secondary' onClick={(e)=>{
          localStorage.setItem('callbackUrl', '/create-initiative');
          e.preventDefault()
          history.push('/login')
        }} > Увійти</Button>
      </div>
    </FloatingContainer>
  );
}