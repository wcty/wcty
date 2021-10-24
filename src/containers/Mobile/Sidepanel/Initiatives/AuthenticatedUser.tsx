import { atoms, useI18n, useUser } from 'common';
import { UserIconRow, List } from "../styles";
import { useMyInitiativeListQuery } from "generated";
import { useRecoilState } from "recoil";
import { Map } from 'components'
import { useEffect, useState } from "react";
import { ListRow } from "components";
import Sidepanel from "..";
import BurgerFab from 'containers/Mobile/FloatPanel/BurgerFab';
import Slides from '../../Slides'

export default function InitiativesDrawer(){
  const user = useUser()
  const i18n = useI18n()
  const [view] = useRecoilState(Map.viewport)
  
  const location = {
    type: 'Point',
    coordinates: [view.longitude, view.latitude]
  }

  const { data, error, variables } = useMyInitiativeListQuery({variables:{ user_id: user?.id }})
  const [ initiatives, setInitiatives ] = useState(data)
  const [open, setOpen] = useRecoilState(Sidepanel.open)
  const [focus, setFocus] = useRecoilState(atoms.focalPoint)
  const [slideIndex, setSlideIndex] = useRecoilState(Slides.index)
  const [viewport, setViewport] = useRecoilState(Map.viewport)

  useEffect(()=>{
    console.log('auth',data,variables)

    if( data && data?.initiatives.length>0 ){
      setInitiatives(data)
    }
  },[data,variables])

  return <>
    <div>
      <UserIconRow>
          <span>
            <BurgerFab/>{i18n('myInitiatives')}
          </span>
          <span style={{fontSize: 10}}>
            {/* {'1111 initiatives'} */}
          </span>
      </UserIconRow>
      <List>
        {initiatives?.initiatives.map((v,key)=>
          <ListRow onClick={
            ()=>{
              setOpen(false)
              setFocus(v.geometry.coordinates)
              setViewport({
                longitude: v.geometry.coordinates[0],
                latitude: v.geometry.coordinates[1],
                zoom: 16,
                viewportChangeMethod: 'easeTo'
              })
              setSlideIndex(0)
          }} data={{...v, type: 'initiative'}} {...{key}}/>)}
      </List>
    </div>
  </>
}
