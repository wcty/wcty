import { useGeolocation, useI18n, useUser } from "common";
import { useInitiativeByPkQuery } from "generated";
import { useParams } from "react-router-dom";
import { Icon, MetricsRow } from "./styles";
import { ReactComponent as People } from 'assets/icons/popupPeople.svg'
import { ReactComponent as Location } from 'assets/icons/popupLocation.svg'

import distance from '@turf/distance'
import { format } from 'd3-format'

const formatMeters = format(',.2r')

export default function Metrics() {
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

  return <>
      <MetricsRow>
        <div><Icon><People/></Icon>{data?.initiative?.members_aggregate.aggregate?.count}</div>
        { dist && 
          <div>
            <Icon><Location/></Icon>
            { dist<1000?
              formatMeters(dist) + i18n('initiativeDistanceFromMeM'):
              formatMeters(dist/1000) + i18n('initiativeDistanceFromMeKM')
            }
          </div> }
      </MetricsRow> 
  </>
}