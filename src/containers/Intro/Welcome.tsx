import { atoms, useI18n, useUser } from "common";
import { ReactComponent as Steps } from 'assets/icons/steps.svg'
import Map from 'components/Map'
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import Cover from 'assets/images/intro_cover.png'
import { RightArrow } from "containers/Slides/styles";
import IconButton from "components/IconButton";

export default function Creation({
  index, setIndex
}:{
  index:number, setIndex:(index:number) => void
}) {
  
  const user = useUser()
  const router = useRouter()
  const [viewport, setViewport] = useRecoilState(Map.viewport)
  const [focus, setFocus] = useRecoilState(atoms.focalPoint)
  const i18n = useI18n()
console.log(Cover)

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