import Button from "components/Button";
import { useI18n } from "common";
import { ReactComponent as Steps } from 'assets/icons/steps1.svg'
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
  const i18n = useI18n()

  return (
    <>
        <div>
          {i18n('creation_of_initiative')}
          <Steps/>
        </div>
        <TextField 
          type='text'
          value={initiative.name}
          onChange={(e)=>setInitiative({...initiative, name: e.target.value})}
          placeholder={i18n('name_of_your_initiative')}/>
        <TextArea
          rows={3}
          value={initiative.problem}
          onChange={(e)=>setInitiative({...initiative, problem: e.target.value})}
          placeholder={i18n('describe_your_idea')}/>
        <div>
          <Button 
            customType='secondary' 
            onClick={()=>setIndex(index-1)}>{i18n('back')}</Button>
          <Button 
            disabled={initiative.name.length<2||initiative.problem.length<2}
            onClick={()=>{
                setIndex(index+1)
            }}>{i18n('next')}</Button>
        </div>
    </>
  )
}