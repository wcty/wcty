import { makeStyles } from '@material-ui/core/styles'
import { Fab } from '@material-ui/core'
import { useRecoilState } from 'recoil'
import { atoms, useGeolocation } from 'misc'
import { MyLocation } from '@material-ui/icons'
import s from './styles.module.scss'

export default ()=>{
  const location = useGeolocation()
  const [viewport, setViewport] = useRecoilState(atoms.viewport)

  return <>
    <Fab 
      onClick={()=>{
        if(location){
          setViewport({viewportChangeMethod: 'easeTo', ...location, zoom: 16});
        }
      }}
      className={classes.locateFab} 
      size="small"
      aria-label="add"
      disabled={!location}
      style={{zIndex:1, position: 'absolute'}}
    >
      <MyLocation />
    </Fab>
  </>
}