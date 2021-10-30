import { atoms, useAddress, useGeolocation, useI18n, useUser } from "common";
import { useInitiativeByPkQuery } from "generated";
import { useParams } from "react-router-dom";
import { Header, Icon, Metrics, ShareJoin } from "../styles";
import { ReactComponent as People } from 'assets/icons/popupPeople.svg'
import { ReactComponent as Location } from 'assets/icons/popupLocation.svg'

import distance from '@turf/distance'
import { format } from 'd3-format'
import { DateTime, DateTimeFormatOptions } from 'luxon'
import { useRecoilState } from "recoil";

const formatMeters = format(',.2r')

export default function HeaderComponent() {
  const {id} = useParams<{id:string}>();
  const user = useUser()
  const {data} = useInitiativeByPkQuery({variables:{id,user_id:user?.id}, fetchPolicy:"cache-only"});
  
  const loc = useGeolocation()
  const dist = data?.initiative && loc && distance(
    data?.initiative?.geometry?.coordinates, 
    [loc.longitude, loc.latitude],
    { units:'meters' }
  )
  const i18n = useI18n()
  const address = useAddress(data?.initiative?.geometry.coordinates)
  const [lang] = useRecoilState(atoms.lang)

  const f:DateTimeFormatOptions = {month: 'long', day: 'numeric', year:'numeric'};
  const dt = DateTime
    .fromISO(data?.initiative?.created_at)
    .setLocale(lang)
    .toLocaleString(f)

  return <>
      <Metrics>
        <div><Icon><People/></Icon>{data?.initiative?.members_aggregate.aggregate?.count}</div>
        { dist && 
          <div>
            <Icon><Location/></Icon>
            { dist<1000?
              formatMeters(dist) + i18n('initiativeDistanceFromMeM'):
              formatMeters(dist/1000) + i18n('initiativeDistanceFromMeKM')
            }
          </div> }
      </Metrics> 
      <Header>
        <div>{address}</div>
        <h2>{data?.initiative?.name}</h2>
        <div>{i18n('initiative_created_at') + dt}</div>
      </Header>
      <ShareJoin>
        <div>{i18n('share')}</div>
        <div>{i18n('join')}</div>
      </ShareJoin>
  </>
}