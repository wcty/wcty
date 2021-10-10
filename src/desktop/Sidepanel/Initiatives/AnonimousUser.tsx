import { useI18n } from "misc";
import { UserIconRow, ListItem, List } from "../styles";
import { useInitiativesNearbyListSubscription } from "generated";
import { useRecoilState } from "recoil";
import { Map } from 'components'
import { useEffect, useState } from "react";

export default function Initiatives(){
  const i18n = useI18n()
  const [view] = useRecoilState(Map.viewport)
  
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
            {'1111 initiatives'}
          </span>
      </UserIconRow>
      <List>
        {initiatives?.initiatives_nearby.map((v,key)=>
          <ListItem {...{key}}>
            <img src={v.image+'?w=30&h=30&q=90'}/>
            <div>
              <span>{v.name}</span>
              <span className='address'>Address</span>
            </div>
          </ListItem>
        )}
      </List>
    </div>
  </>
}