import { Card, Thumbnail, Content, TopBar, BottomPanel, Button, Metrics, Icon } from "./styles";
import { ReactComponent as People } from 'assets/icons/popupPeople.svg'
import { ReactComponent as Location } from 'assets/icons/popupLocation.svg'
import { useGeolocation, useI18n, atoms } from 'common';
import distance from '@turf/distance'
import { format } from 'd3-format'
import { useRouter } from 'next/router';

const formatMeters = format(',.2r')

type InitiativeProps = { entry: atoms.Entry }

export default function InitiativeCard({entry}:InitiativeProps){

  const loc = useGeolocation()
  const dist = entry && loc && distance(
    entry?.geometry?.coordinates, 
    [loc.longitude, loc.latitude],
    { units:'meters' }
  )
  const i18n = useI18n()
  const router = useRouter()

  return entry && 
    <Card onClick={()=>entry?.properties?.type==='initiative' && router.push({pathname: `/initiative/[id]`, query: { id:entry.id }})}>
      <Thumbnail src={entry?.properties?.image+'?w=100&h=100&q=90'}/>
      <Content>
        <TopBar>
          <Metrics>
            <div><Icon><People/></Icon>{entry?.properties?.members}</div>
            { dist && 
              <div>
                <Icon><Location/></Icon>
                { dist<1000?
                  formatMeters(dist) + i18n('initiativeDistanceFromMeM'):
                  formatMeters(dist/1000) + i18n('initiativeDistanceFromMeKM')
                }
              </div>}
          </Metrics> 
          <Button><div/></Button>
        </TopBar>
        <BottomPanel>
          <span>{entry?.properties?.name}</span>
        </BottomPanel>
      </Content>
    </Card>
}