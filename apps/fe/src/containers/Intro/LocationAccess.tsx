import Cover from '@assets/images/intro_cover.png'
import { IndexProps } from '.'

export default function Creation(props:IndexProps) {

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
        <img src={Cover.src}/>
    </>
  )
}