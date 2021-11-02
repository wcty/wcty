import { atoms, useI18n, useLayout } from 'common';
import { UserIconRow, List } from "../styles";
import { useOrganizationNearbyListQuery } from "generated";
import { useRecoilState } from "recoil";
import { Map } from 'components'
import { useEffect, useState } from "react";
import { ListRow } from "components";
import Sidepanel from "..";
import BurgerFab from 'containers/Mobile/FloatPanel/BurgerFab';
import Slides from 'containers/Mobile/Slides';

export default function Organization(){
  const i18n = useI18n()
  const [view] = useRecoilState(Map.viewport)
  
  const location = {
    type: 'Point',
    coordinates: [view.longitude, view.latitude]
  }

  const { data, error, variables } = useOrganizationNearbyListQuery({variables:{ location, limit: 10 }})
  const [ organizations, setOrganizations ] = useState(data)
  const [open, setOpen] = useRecoilState(Sidepanel.open)
  const [focus, setFocus] = useRecoilState(atoms.focalPoint)
  const [slideIndex, setSlideIndex] = useRecoilState(Slides.index)
  const [viewport, setViewport] = useRecoilState(Map.viewport)

  const layout = useLayout()

  useEffect(()=>{
    if( data && data.orgs_nearby.length>0 ){
      setOrganizations(data)
    }
  },[data])

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
        {organizations?.orgs_nearby.map((v,key)=>
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