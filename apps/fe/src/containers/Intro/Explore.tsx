import Button from "components/Button";
import { ReactComponent as Steps } from 'assets/icons/steps2.svg'
import { useI18n } from "common";
import { useRouter } from "next/router";
import Cover from 'assets/images/intro_cover.png'

export default function Creation({
  index, setIndex
}:{
  index:number, setIndex:(index:number) => void,
}) {
  const router = useRouter()
  const i18n = useI18n()

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