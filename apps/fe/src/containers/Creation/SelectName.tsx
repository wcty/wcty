import { Button, TextArea, TextField } from "@ui";
import { ReactComponent as Steps } from '@assets/icons/steps1.svg'
import { Initiative } from ".";
import { t, Trans } from '@lingui/macro'

export default function Creation({
  initiative,
  setInitiative,
  index, setIndex
}:{
  initiative:Initiative,
  setInitiative: (initiative:Initiative) => void,
  index:number, setIndex:(index:number) => void
}) {

  return (
    <>
        <div>
          <Trans>Creation of initiative</Trans>
          <Steps/>
        </div>
        <TextField 
          type='text'
          value={initiative.name}
          onChange={(e)=>setInitiative({...initiative, name: e.target.value})}
          placeholder={t`Name of your initiative`}/>
        <TextArea
          rows={3}
          value={initiative.problem}
          onChange={(e)=>setInitiative({...initiative, problem: e.target.value})}
          placeholder={t`Describe your idea or problem that you are trying to solve`}/>
        <div>
          <Button 
            customType='secondary' 
            onClick={()=>setIndex(index-1)}><Trans>Back</Trans></Button>
          <Button 
            disabled={initiative.name.length<2||initiative.problem.length<2}
            onClick={()=>{
                setIndex(index+1)
            }}><Trans>Next</Trans></Button>
        </div>
    </>
  )
}