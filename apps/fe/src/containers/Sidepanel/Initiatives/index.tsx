import { atoms,  useLayout, useUser } from 'common';
import { UserIconRow, List } from "../styles";
import { useInitiativesNearbyListQuery, useMyInitiativeListQuery } from "generated";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import ListRow from 'components/ListRow';
import Sidepanel from "..";
import Slides from 'containers/Slides';
import BurgerFab from 'containers/FloatPanel/BurgerFab';
import { useRouter } from 'next/router';
import { Trans } from '@lingui/macro'

export default function InitiativesDrawer(){
  const user = useUser()
  const [view] = useRecoilState(atoms.viewport)
  
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
  const [viewport, setViewport] = useRecoilState(atoms.viewport)
  const [selected, setSelected] = useRecoilState(atoms.selected)

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
  const router = useRouter()
  const isEntryCreation = router.pathname.includes('/create-initiative')

  return <>
    <div>
      <UserIconRow>
          <span>
            {layout==='mobile' && <BurgerFab/>}
            <Trans>My initiatives</Trans>
          </span>
          <span style={{fontSize: 10}}>
            {/* {'1111 initiatives'} */}
          </span>
      </UserIconRow>
      <List>
        {initiatives?.initiatives.map((v,key)=>
          layout==='desktop'? 
          <ListRow onClick={
            ()=>{
              setOpen(false)
              setFocus(v.geometry.coordinates)
              setSelected({
                id: v.id,
                type: 'Feature',
                source: 'initiative',
                geometry: v.geometry,
                properties: {
                  name: v.name||'',
                  image: v.image||'',
                  description:  
                    v.infos?.[0].problem? (v.infos?.[0].problem + '\n'):'' + 
                    v.infos?.[0].goal? (v.infos?.[0].goal + '\n'):'' + 
                    v.infos?.[0].context||'',
                  created_at: v.created_at,
                  id: v.id,
                  modified_at: '',
                  address: '',
                  type: 'initiative'
                }
              })
              setViewport({
                longitude: v.geometry.coordinates[0],
                latitude: v.geometry.coordinates[1],
                zoom: 16,
                viewportChangeMethod: 'easeTo'
              })
              setSlideIndex(0)
            }
          } data={{...v, type: 'initiative'}} {...{key}}/>:
          <ListRow onClick={
            ()=>{
              setOpen(false)
              setFocus(v.geometry.coordinates)
              setSelected({
                id: v.id,
                type: 'Feature',
                source: 'initiative',
                geometry: v.geometry,
                properties: {
                  name: v.name||'',
                  image: v.image||'',
                  description:  
                    v.infos?.[0].problem? (v.infos?.[0].problem + '\n'):'' + 
                    v.infos?.[0].goal? (v.infos?.[0].goal + '\n'):'' + 
                    v.infos?.[0].context||'',
                  created_at: v.created_at,
                  id: v.id,
                  modified_at: '',
                  address: '',
                  type: 'initiative'
                }
              })
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
