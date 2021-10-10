import { useState, useRef, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Fab, Collapse } from '@material-ui/core'
import { Alert, AlertTitle } from '@material-ui/lab';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { useI18n, atoms } from 'misc'
import { AddLocation } from '@material-ui/icons'
import { useHistory } from 'react-router-dom'
import s from './styles.module.scss'
import App from 'App';

export default ({ active }:{ active: boolean })=>{
  const [alert, setAlert] = useState<{description:string}|null>(null)
  const user = useRecoilValue(App.user)
  const setSelected = useSetRecoilState(atoms.selectedAtom)
  const [initiativeBar, setInitiativeBar] = useRecoilState(atoms.initiativeBarAtom)
  const i18n = useI18n()
  const history = useHistory()

  return (
    <>
      <>
        <Fab 
          onClick={()=>{
            if(active){
              history.push('/create-initiative')
              setSelected(null)
              setInitiativeBar(false)
            }else{
              setAlert({description: i18n('alertYouNeedToLogin')})
            }
          }}
          className={s.InitiativeFab} 
          style={{
            top: initiativeBar?'unset':'1rem',
            bottom: initiativeBar?'1rem':'unset',
            zIndex: 1,
            position: 'absolute'
          }}
          aria-label="add"
        >
          <AddLocation />
        </Fab>
      </>
    { alert && !user && (
      <Collapse in={Boolean(alert)}>
        <Alert severity="info" className={s.alert} onClose={() => {setAlert(null)}}>
          <AlertTitle>Info</AlertTitle>
          {alert.description}
        </Alert>
      </Collapse>
    )}
    </>
  )
}