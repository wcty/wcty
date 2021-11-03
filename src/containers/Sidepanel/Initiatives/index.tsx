import { atoms, useI18n, useLayout, useUser } from 'common';
import { UserIconRow, List } from "../styles";
import { useInitiativesNearbyListQuery, useMyInitiativeListQuery } from "generated";
import { useRecoilState } from "recoil";
import { Map } from 'components'
import { useEffect, useState } from "react";
import { ListRow } from "components";
import Sidepanel from "..";
import Slides from 'containers/Slides';
import BurgerFab from 'containers/FloatPanel/BurgerFab';
import { useHistory } from 'react-router';

export default function InitiativesDrawer(){
  const user = useUser()
  const i18n = useI18n()
  const [view] = useRecoilState(Map.viewport)
  
  const location = {
    type: 'Point',
    coordinates: [view.longitude, view.latitude]
  }
  const { data } = useInitiativesNearbyListQuery({variables:{ location, limit: 10 }, skip: !!user})
  const { data:myData } = useMyInitiativeListQuery({variables:{ user_id: user?.id }, skip: !user})
  const [ initiatives, setInitiatives ] = useState(data)
  const [open, setOpen] = useRecoilState(Sidepanel.open)
  const [focus, setFocus] = useRecoilState(atoms.focalPoint)
  const [slideIndex, setSlideIndex] = useRecoilState(Slides.index)
  const [viewport, setViewport] = useRecoilState(Map.viewport)

  const layout = useLayout()

  useEffect(()=>{
    if(user){
      if( myData && myData?.initiatives.length>0 ){
        setInitiatives(myData)
      }
    }else{
      if( data && data?.initiatives.length>0 ){
        setInitiatives(data)
      }
    }
  },[data, myData, user])
  const history = useHistory()
  const isEntryCreation = history.location.pathname.includes('/create-initiative')

  return <>
    <div>
      <UserIconRow>
          <span>
            {layout==='mobile' && <BurgerFab/>}
            {i18n('myInitiatives')}
          </span>
          <span style={{fontSize: 10}}>
            {/* {'1111 initiatives'} */}
          </span>
      </UserIconRow>
      <List>
        {initiatives?.initiatives.map((v,key)=>
          layout==='desktop'? 
          <ListRow onClick={()=>setOpen(false)} data={{...v, type: 'initiative'}} {...{key}}/>:
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
          }} data={{...v, type: 'initiative'}} {...{key}}/>
        )}
      </List>
    </div>
  </>
}
