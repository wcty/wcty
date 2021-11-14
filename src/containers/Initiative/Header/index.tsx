import { atoms, useAddress, useGeolocation, useI18n, useLayout, useUser } from "common";
import { Header, Icon, MetricsRow, ShareJoin, Stats } from "./styles";

import { format } from 'd3-format'
import { DateTime, DateTimeFormatOptions } from 'luxon'
import { useRecoilState } from "recoil";
import { ReactComponent as People } from 'assets/icons/popupPeople.svg'
import { ReactComponent as Location } from 'assets/icons/popupLocation.svg'
import distance from "@turf/distance";
import { useRouter } from "next/router";
import Button from "components/Button";
import { InitiativeProps } from "..";
import { useInitiativeByPkQuery } from "generated";

const formatMeters = format(',.2r')

function PeopleLocation({count, distance}: {count:number, distance?:number}) {
  const i18n = useI18n()

  return <>
    <div><Icon><People/></Icon>{count}</div>
    { distance && 
      <div>
        <Icon><Location/></Icon>
        { distance<1000?
          formatMeters(distance) + i18n('initiativeDistanceFromMeM'):
          formatMeters(distance/1000) + i18n('initiativeDistanceFromMeKM')
        }
      </div> }
  </>
}

export default function HeaderComponent({initiative}:InitiativeProps) {
  const layout = useLayout()
  const { id } = useRouter().query;
  const user = useUser()
  
  const loc = useGeolocation()
  const dist = initiative && loc && distance(
    initiative?.geometry?.coordinates, 
    [loc.longitude, loc.latitude],
    { units:'meters' }
  ) || undefined
  const i18n = useI18n()
  const address = useAddress(initiative?.geometry.coordinates)
  const [lang] = useRecoilState(atoms.lang)

  const f:DateTimeFormatOptions = {month: 'long', day: 'numeric', year:'numeric'};
  const dt = DateTime
    .fromISO(initiative?.created_at)
    .setLocale(lang)
    .toLocaleString(f)
    
  const { data } = useInitiativeByPkQuery({variables:{id,user_id:user?.id}, fetchPolicy:"cache-only"});
  const isMember = !!data?.initiative?.members?.length

  return <>
      {layout==='desktop' ? 
        <Stats>
          <PeopleLocation count={initiative?.members_aggregate.aggregate?.count||1} distance={dist}/>
          <div>{address}</div>
          <div>{i18n('initiative_created_at') + dt}</div>
        </Stats>:
        <MetricsRow>
          <PeopleLocation count={initiative?.members_aggregate.aggregate?.count||1} distance={dist}/>
        </MetricsRow> 
      }
      <Header>
        {layout==='mobile'&& <div>{address}</div> }
        <h2>{initiative?.name }</h2>
        {layout==='mobile'?
          <div>{i18n('initiative_created_at') + dt}</div>:
          <ShareJoin>
            <Button>{i18n('share')}</Button>
            <Button>{i18n('join')}</Button>
          </ShareJoin>
        }
      </Header>
      {layout==='mobile'&&       
        <ShareJoin>
          <div>{i18n('share')}</div>
          {!isMember && <div>{i18n('join')}</div>}
        </ShareJoin> }
  </>
}