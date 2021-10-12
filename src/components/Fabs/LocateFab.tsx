import { Fab } from '@material-ui/core'
import { useRecoilState } from 'recoil'
import { atoms, useGeolocation } from 'shared'
import { MyLocation } from '@material-ui/icons'
import s from './styles.module.scss'
import { Map } from 'components'

export default ()=>{
  const location = useGeolocation()
  const [viewport, setViewport] = useRecoilState(Map.viewport)

  return <>
    <Fab 
      onClick={()=>{
        if(location){
          setViewport({viewportChangeMethod: 'easeTo', ...location, zoom: 16});
        }
      }}
      className={s.locateFab} 
      size="small"
      aria-label="add"
      disabled={!location}
      style={{zIndex:1, position: 'absolute'}}
    >
      <MyLocation />
    </Fab>
  </>
}