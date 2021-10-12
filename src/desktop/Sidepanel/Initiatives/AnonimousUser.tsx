import { useAddress, useI18n } from "shared";
import { UserIconRow, ListItem, List } from "../styles";
import { useInitiativesNearbyListSubscription, Initiatives } from "generated";
import { useRecoilState } from "recoil";
import { Map } from 'components'
import { useEffect, useState } from "react";
import { ListRow } from "../Row";

export default function InitiativesDrawer(){
  const i18n = useI18n()
  const [view] = useRecoilState(Map.viewport)
  const [selected, setSelected] = useRecoilState(Map.selected)
  const location = {
    type: 'Point',
    coordinates: [view.longitude, view.latitude]
  }

  const { data, error, variables } = useInitiativesNearbyListSubscription({variables:{ location, limit: 10 }})
  const [ initiatives, setInitiatives ] = useState(data)

  console.log(error, variables)

  useEffect(()=>{
    if( data && data?.initiatives_nearby.length>0 ){
      setInitiatives(data)
    }
  },[data])

  return <>
    <div>
      <UserIconRow>
          <span>
            {i18n('initiatives')}
          </span>
          <span style={{fontSize: 10}}>
            {/* {'1111 initiatives'} */}
          </span>
      </UserIconRow>
      <List>
        {initiatives?.initiatives_nearby.map((v,key)=><ListRow data={v} source='initiatives' {...{key}}/>)}
      </List>
    </div>
  </>
}
