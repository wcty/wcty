import { useAddress, useGeolocation, useI18n, useUser } from "common";
import { useInitiativeByPkQuery } from "generated";
import { useParams } from "react-router-dom";
import { Container, FilletButton, Header, Icon, InitiativeDescription, Metrics, ShareJoin } from "./styles";
import placeholder from 'assets/images/placeholder.png'
import { ReactComponent as People } from 'assets/icons/popupPeople.svg'
import { ReactComponent as Location } from 'assets/icons/popupLocation.svg'
import distance from '@turf/distance'
import { format } from 'd3-format'
import {ReactComponent as Fillet} from 'assets/icons/fillet.svg'

const formatMeters = format(',.2r')

export default function Initiative() {
  const {id} = useParams<{id:string}>();
  const user = useUser()
  const {data} = useInitiativeByPkQuery({variables:{id,user_id:user?.id}});
  
  const loc = useGeolocation()
  const dist = data?.initiative && loc && distance(
    data?.initiative?.geometry?.coordinates, 
    [loc.longitude, loc.latitude],
    { units:'meters' }
  )
  const i18n = useI18n()
  const isMember = !!data?.initiative?.members.length
  const address = useAddress(data?.initiative?.geometry.coordinates)

  return (
    <Container>
      <img src={data?.initiative?.image||placeholder}/>
      <FilletButton/>
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
        <div>{i18n('initiative_created_at') + new Date(data?.initiative?.created_at).toUTCString()}</div>
      </Header>
      <ShareJoin>
        <div>{i18n('share')}</div>
        <div>{i18n('join')}</div>
      </ShareJoin>
      <InitiativeDescription open={true}>
        <span>
          <span>{i18n('description_of_initiative')}</span>
          
        </span>
      </InitiativeDescription>
      {/* <div style={{padding:'2rem'}}>{
        isMember?
        'Feed and navigation':
        'Join initiative'
      }</div> */}
    </Container>
  )
}