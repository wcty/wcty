import Button from "components/Button";
import { BottomContainer } from "./styles";
import { useHistory } from "react-router-dom";
import { useAddress, useI18n, useUser } from "common";
import { ReactComponent as Steps } from 'assets/icons/steps1.svg'
import Map from 'components/Map'
import { useRecoilState } from "recoil";
import { TextArea, TextField } from "components";
import { Initiative } from ".";

export default function Creation({
  initiative,
  setInitiative,
  index, setIndex
}:{
  initiative:Initiative,
  setInitiative: (initiative:Initiative) => void,
  index:number, setIndex:(index:number) => void
}) {
  
  const user = useUser()
  const history = useHistory()
  const [viewport, setViewport] = useRecoilState(Map.viewport)
  // const [focus, setFocus] = useRecoilState(atoms.focalPoint)
  const mbAddress = useAddress([viewport.longitude, viewport.latitude], true)
  const i18n = useI18n()

  return (
    <>
      <BottomContainer>
        <div>
          Створення ініціативи
          <Steps/>
        </div>
        <TextField 
          type='text'
          value={initiative.name}
          onChange={(e)=>setInitiative({...initiative, name: e.target.value})}
          placeholder={'Назва вашої ініціативи'}/>
        <TextArea
          rows={3}
          value={initiative.problem}
          onChange={(e)=>setInitiative({...initiative, problem: e.target.value})}
          placeholder={'Опишіть свою ідею або проблему що ви намагаєтеся вирішити'}/>
        <div>
          <Button 
            size='medium'
            customType='secondary' 
            onClick={()=>setIndex(index-1)}>Назад</Button>
          <Button 
            size='medium'
            customType='primary'
            disabled={initiative.name.length<5||initiative.problem.length<10}
            onClick={()=>{
                setIndex(index+1)
            }}>Далі</Button>
        </div>
      </BottomContainer>
    </>
  )
}