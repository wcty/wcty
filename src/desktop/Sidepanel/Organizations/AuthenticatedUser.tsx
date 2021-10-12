import { useI18n, useUser } from "shared";
import { UserIconRow, ListItem, List } from "../styles";
import { useMyOrganizationListSubscription, useOrganizationNearbyListSubscription } from "generated";
import { useRecoilState } from "recoil";
import { Map } from 'components'
import { useEffect, useState } from "react";
import { ListRow } from "../Row";
import { userInfo } from "os";

export default function Organization(){
  const i18n = useI18n()
  const [view] = useRecoilState(Map.viewport)
  const user = useUser()
  
  const location = {
    type: 'Point',
    coordinates: [view.longitude, view.latitude]
  }

  const { data, error, variables } = useMyOrganizationListSubscription({variables:{ user_id: user?.id }})
  const [ organizations, setOrganizations ] = useState(data)

  console.log(error, variables, data)

  useEffect(()=>{
    if( data && data.orgs.length>0 ){
      setOrganizations(data)
    }
  },[data])

  return <>
    <div>
      <UserIconRow>
          <span>
            {i18n('myOrganisations')}
          </span>
          <span style={{fontSize: 10}}>
            {/* {'1111 organizations'} */}
          </span>
      </UserIconRow>
      <List>
        {organizations?.orgs.map((v,key)=><ListRow data={v} source='orgs' {...{key}}/>)}
      </List>
    </div>
  </>
}