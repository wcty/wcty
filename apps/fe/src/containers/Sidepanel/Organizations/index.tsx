import { atoms,  useLayout } from 'common';
import { UserIconRow, List, ListContainer } from "../styles";
import { useMyOrganizationListQuery, useOrganizationNearbyListQuery } from "generated";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import ListRow from 'components/ListRow';
import Sidepanel from "..";
import BurgerFab from 'containers/FloatPanel/BurgerFab';
import Slides from 'containers/Slides';
import { Trans } from '@lingui/macro'
import { useUserData } from '@nhost/nextjs';

export default function Organization(){
  const [view] = useRecoilState(atoms.viewport)
  const user = useUserData()
  
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
  const [viewport, setViewport] = useRecoilState(atoms.viewport)

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
    <ListContainer>
      <UserIconRow>
          <span>
            {layout==='mobile' && <BurgerFab/>}
            <Trans>Organisations</Trans>
          </span>
          <span style={{fontSize: 10}}>
            {/* {'1111 organizations'} */}
          </span>
      </UserIconRow>
      <List>
        {organizations?.orgs.map((v,key)=>
          layout==='desktop'?
          <ListRow onClick={()=>setOpen(false)} data={{...v, infos:[{problem: v.description}], type: 'organization'}} key={key}/>:
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
          }} data={{...v, infos:[{problem: v.description}], type: 'organization'}} key={key}/>
        )}
      </List>
    </ListContainer>
  </>
}