import { atoms, useAddress, useGeolocation,  useLang,  useLayout, useUser } from "common";
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
import { t, Trans } from '@lingui/macro'

const formatMeters = format(',.2r')

function copyToClipboard(text:string) {
  window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
}

function PeopleLocation({count, distance}: {count:number, distance?:number}) {

  return <>
    <div><Icon><People/></Icon>{count}</div>
    { distance && 
      <div>
        <Icon><Location/></Icon>
        { distance<1000?
          formatMeters(distance) + t`m from me`:
          formatMeters(distance/1000) + t`km from me`
        }
      </div> }
  </>
}

function Buttons({isMember=false}){

  return (
    <ShareJoin>
      <Button 
        onClick={()=>copyToClipboard(window.location.href)}
        customType="secondary"><Trans>Share</Trans></Button>
      {!isMember && <Button><Trans>Join</Trans></Button>}
    </ShareJoin>
  )
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
  const address = useAddress(initiative?.geometry.coordinates)
  const lang = useLang()  
  
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
          <div><Trans>Initiative created at</Trans> {' ' + dt}</div>
        </Stats>:
        <MetricsRow>
          <PeopleLocation count={initiative?.members_aggregate.aggregate?.count||1} distance={dist}/>
        </MetricsRow> 
      }
      <Header>
        {layout==='mobile'&& <div>{address}</div> }
        <h2>{initiative?.name }</h2>
        {layout==='mobile'?
          <div><Trans>Initiative created</Trans>{' ' + dt}</div>:
          <Buttons {...{isMember}}/>
        }
      </Header>
      {layout==='mobile'&& <Buttons {...{isMember}}/> }
  </>
}