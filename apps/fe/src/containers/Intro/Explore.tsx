import { useRouter } from "next/router";
import Cover from 'assets/images/intro_cover.png'

export default function Creation() {
  const router = useRouter()

  return (
    <>
        <h3>
          Доступ до сповіщень
        </h3>
        <div>
          <span>
            Щоби швидко дізнаватися про всі оновлення в ваших ініціативах та організаціях увімніть доступ до сповіщень
          </span>
        </div>
        <img src={Cover}/>
    </>
  )
}