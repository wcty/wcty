import { useI18n, useUser } from 'common';
import { UserIconRow, List } from "../styles";
import { useMyInitiativeListSubscription } from "generated";
import { useRecoilState } from "recoil";
import { Map } from 'components'
import { useEffect, useState } from "react";
import { ListRow } from "components";
import Sidepanel from "..";

export default function InitiativesDrawer(){
  const user = useUser()
  const i18n = useI18n()
  const [view] = useRecoilState(Map.viewport)
  
  const location = {
    type: 'Point',
    coordinates: [view.longitude, view.latitude]
  }

  const { data, error, variables } = useMyInitiativeListSubscription({variables:{ user_id: user?.id }})
  const [ initiatives, setInitiatives ] = useState(data)
  const [open, setOpen] = useRecoilState(Sidepanel.open)

  useEffect(()=>{
    if( data && data?.initiatives.length>0 ){
      setInitiatives(data)
    }
  },[data])

  return <>
    <div>
      <UserIconRow>
          <span>
            {i18n('myInitiatives')}
          </span>
          <span style={{fontSize: 10}}>
            {/* {'1111 initiatives'} */}
          </span>
      </UserIconRow>
      <List>
        {initiatives?.initiatives.map((v,key)=>
          <ListRow onClick={()=>setOpen(false)} data={{...v, type: 'initiative'}} {...{key}}/>)}
      </List>
    </div>
  </>
}
