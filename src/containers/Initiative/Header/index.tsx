import { atoms, useAddress, useGeolocation, useI18n, useLayout, useUser } from "common";
import { useInitiativeByPkQuery } from "generated";
import { Header, Icon, MetricsRow, ShareJoin, Stats } from "./styles";

import { format } from 'd3-format'
import { DateTime, DateTimeFormatOptions } from 'luxon'
import { useRecoilState } from "recoil";
import { ReactComponent as People } from 'assets/icons/popupPeople.svg'
import { ReactComponent as Location } from 'assets/icons/popupLocation.svg'
import distance from "@turf/distance";
import { useRouter } from "next/router";
import Button from "components/Button";

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

export default function HeaderComponent() {
  const layout = useLayout()
  const { id } = useRouter().query;
  const user = useUser()
  const { data } = useInitiativeByPkQuery({variables:{id,user_id:user?.id}, fetchPolicy:"cache-only"});
  
  const loc = useGeolocation()
  const dist = data?.initiative && loc && distance(
    data?.initiative?.geometry?.coordinates, 
    [loc.longitude, loc.latitude],
    { units:'meters' }
  ) || undefined
  const i18n = useI18n()
  const address = useAddress(data?.initiative?.geometry.coordinates)
  const [lang] = useRecoilState(atoms.lang)

  const f:DateTimeFormatOptions = {month: 'long', day: 'numeric', year:'numeric'};
  const dt = DateTime
    .fromISO(data?.initiative?.created_at)
    .setLocale(lang)
    .toLocaleString(f)

  const isMember = !!data?.initiative?.members?.length

  return <>
      {layout==='desktop' ? 
        <Stats>
          <PeopleLocation count={data?.initiative?.members_aggregate.aggregate?.count||1} distance={dist}/>
          <div>{address}</div>
          <div>{i18n('initiative_created_at') + dt}</div>
        </Stats>:
        <MetricsRow>
          <PeopleLocation count={data?.initiative?.members_aggregate.aggregate?.count||1} distance={dist}/>
        </MetricsRow> 
      }
      <Header>
        {layout==='mobile'&& <div>{address}</div> }
        <h2>{data?.initiative?.name }</h2>
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