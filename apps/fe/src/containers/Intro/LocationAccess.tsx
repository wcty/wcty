import { useI18n } from "common";
import { ReactComponent as Steps } from 'assets/icons/steps1.svg'
import Cover from 'assets/images/intro_cover.png'

export default function Creation({
  index, setIndex
}:{
  index:number, setIndex:(index:number) => void
}) {
  const i18n = useI18n()

  return (
    <>
        <h3>
          Доступ до геолокації
        </h3>
        <div>
          <span>
          Для того, щоб бачити відстань від вас до ініціатив та організацій, будь ласка, надайте доступ до вашої геолокації.
          </span>
        </div>
        <img src={Cover}/>
    </>
  )
}