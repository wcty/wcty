import { atoms, useI18n, useLayout, useUser } from 'common';
import { UserIconRow, List } from "../styles";
import { useMyOrganizationListQuery, useOrganizationNearbyListQuery } from "generated";
import { useRecoilState } from "recoil";
import { Map } from 'components'
import { useEffect, useState } from "react";
import { ListRow } from "components";
import Sidepanel from "..";
import BurgerFab from 'containers/FloatPanel/BurgerFab';
import Slides from 'containers/Slides';

export default function Organization(){
  const i18n = useI18n()
  const [view] = useRecoilState(Map.viewport)
  const user = useUser()
  
  const location = {
    type: 'Point',
    coordinates: [view.longitude, view.latitude]
  }
  const { data } = useOrganizationNearbyListQuery({variables:{ location, limit: 10 }, skip: !!user})
  const { data:myData } = useMyOrganizationListQuery({variables:{ user_id: user?.id }, skip: !user})
  const [ organizations, setOrganizations ] = useState(data)
  const [open, setOpen] = useRecoilState(Sidepanel.open)
  const [focus, setFocus] = useRecoilState(atoms.focalPoint)
  const [slideIndex, setSlideIndex] = useRecoilState(Slides.index)
  const [viewport, setViewport] = useRecoilState(Map.viewport)

  const layout = useLayout()

  useEffect(()=>{
    if(user){
      if( myData && myData.orgs.length>0 ){
        setOrganizations(myData)
      }
    }else{
      if( data && data.orgs.length>0 ){
        setOrganizations(data)
      }
    }

  },[data, myData, user])

  return <>
    <div>
      <UserIconRow>
          <span>
            {layout==='mobile' && <BurgerFab/>}
            {i18n('organisations')}
          </span>
          <span style={{fontSize: 10}}>
            {/* {'1111 organizations'} */}
          </span>
      </UserIconRow>
      <List>
        {organizations?.orgs.map((v,key)=>
          layout==='desktop'?
          <ListRow onClick={()=>setOpen(false)} data={{...v, type: 'organization'}} {...{key}}/>:
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
          }} data={{...v, type: 'organization'}} {...{key}}/>
        )}
      </List>
    </div>
  </>
}