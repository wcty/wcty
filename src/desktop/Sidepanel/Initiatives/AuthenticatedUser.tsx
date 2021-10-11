import { useAddress, useI18n, useUser } from "misc";
import { UserIconRow, ListItem, List } from "../styles";
import { useInitiativesNearbyListSubscription, Initiatives, useMyInitiativeListSubscription } from "generated";
import { useRecoilState } from "recoil";
import { Map } from 'components'
import { useEffect, useState } from "react";
import { ListRow } from "../Row";

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

  console.log(error, variables)

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
        {initiatives?.initiatives.map((v,key)=><ListRow data={v} {...{key}}/>)}
      </List>
    </div>
  </>
}
