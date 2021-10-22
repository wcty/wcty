import { useI18n, useUser } from 'common';
import { UserIconRow, List } from "../styles";
import { useMyOrganizationListQuery } from "generated";
import { useRecoilState } from "recoil";
import { Map } from 'components'
import { useEffect, useState } from "react";
import { ListRow } from "components";
import Sidepanel from "..";
import BurgerFab from 'containers/Mobile/FloatPanel/BurgerFab';

export default function Organization(){
  const i18n = useI18n()
  const [view] = useRecoilState(Map.viewport)
  const user = useUser()
  
  const location = {
    type: 'Point',
    coordinates: [view.longitude, view.latitude]
  }

  const { data, error, variables } = useMyOrganizationListQuery({variables:{ user_id: user?.id }})
  const [ organizations, setOrganizations ] = useState(data)
  const [open, setOpen] = useRecoilState(Sidepanel.open)

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
            <BurgerFab/>{i18n('myOrganisations')}
          </span>
          <span style={{fontSize: 10}}>
            {/* {'1111 organizations'} */}
          </span>
      </UserIconRow>
      <List>
        {organizations?.orgs.map((v,key)=>
          <ListRow onClick={()=>setOpen(false)} data={{...v, type: 'organization'}} {...{key}}/>)}
      </List>
    </div>
  </>
}