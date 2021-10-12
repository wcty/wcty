import { useI18n } from "misc";
import { UserIconRow, ListItem, List } from "../styles";
import { useOrganizationNearbyListSubscription } from "generated";
import { useRecoilState } from "recoil";
import { Map } from 'components'
import { useEffect, useState } from "react";
import { ListRow } from "../Row";

export default function Organization(){
  const i18n = useI18n()
  const [view] = useRecoilState(Map.viewport)
  
  const location = {
    type: 'Point',
    coordinates: [view.longitude, view.latitude]
  }

  const { data, error, variables } = useOrganizationNearbyListSubscription({variables:{ location, limit: 10 }})
  const [ organizations, setOrganizations ] = useState(data)

  console.log(error, variables, data)

  useEffect(()=>{
    if( data && data.orgs_nearby.length>0 ){
      setOrganizations(data)
    }
  },[data])

  return <>
    <div>
      <UserIconRow>
          <span>
            {i18n('organisations')}
          </span>
          <span style={{fontSize: 10}}>
            {/* {'1111 organizations'} */}
          </span>
      </UserIconRow>
      <List>
        {organizations?.orgs_nearby.map((v,key)=><ListRow data={v} source='orgs' {...{key}}/>)}
      </List>
    </div>
  </>
}