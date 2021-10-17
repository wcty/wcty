import { makeStyles } from '@material-ui/core/styles'
import { Fab } from '@material-ui/core'
import { Layers, Terrain } from '@material-ui/icons'
import { useRecoilState } from 'recoil'
import { atoms } from 'common'
import s from './styles.module.scss'
import { Map } from 'components'

export default ()=>{
  const [satellite,setSatellite] = useRecoilState(Map.satellite)

  return ( 
    <Fab 
      onClick={()=>{
        setSatellite(!satellite)
      }}
      className={s.layersFab} 
      aria-label="satellite layer"
      size='small'
      style={{zIndex:1, position: 'absolute'}}
    >
      {satellite?<Layers fontSize='small' />:<Terrain  fontSize='small'/>}
    </Fab>
  )
}