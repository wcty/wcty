import { useI18n } from 'common';
import { UserIconRow, List } from "../styles";
import { useOrganizationNearbyListQuery } from "generated";
import { useRecoilState } from "recoil";
import { Map } from 'components'
import { useEffect, useState } from "react";
import { ListRow } from "components";
import Sidepanel from "..";

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
        {organizations?.orgs_nearby.map((v,key)=>
          <ListRow onClick={()=>setOpen(false)} data={{...v, type: 'organization'}} {...{key}}/>)}
      </List>
    </div>
  </>
}