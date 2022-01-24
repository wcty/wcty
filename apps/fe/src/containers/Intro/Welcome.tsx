import Cover from '@assets/images/intro_cover.png'
import { IndexProps } from '.'

export default function Creation(props:IndexProps) {
  

  return (
    <>
        <h3>
          Ознайомлення з функціями
        </h3>
        <div>
          <span>
            На кожній сторінці ініціативи знайдете стрічку новин. 
            Коментуйте, спілкуйтесь з іншими учасниками та шукайте найкращі шляхи реалізації ваших задумів.
          </span>
        </div>
        <img src={Cover.src}/>

    </>
  )
}