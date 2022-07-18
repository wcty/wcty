import { Card, Thumbnail, Content, TopBar, BottomPanel, Button, Metrics, Icon } from "./styles";
import { ReactComponent as People } from '@assets/icons/popupPeople.svg'
import { ReactComponent as Location } from '@assets/icons/popupLocation.svg'
import { useGeolocation, atoms } from 'common';
import distance from '@turf/distance'
import { format } from 'd3-format'
import { useRouter } from 'next/router';
import { t } from '@lingui/macro'
import { useEffect, useState } from "react";
import { Loader } from "@ui";

const formatMeters = format(',.2r')

type InitiativeProps = { entry: atoms.Entry }

export default function InitiativeCard({entry}:InitiativeProps){
  const locale = useRouter().locale
  const loc = useGeolocation()
  const dist = entry && loc && distance(
    entry?.geometry?.coordinates, 
    [loc.longitude, loc.latitude],
    { units:'meters' }
  )
  const router = useRouter()

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if( entry?.properties?.type==='initiative' && entry.id ){
      // router.prefetch(`/initiative/[id]`, `/initiative/${entry.id}`, { locale } )
    }
  }, [])
  
  const onClick = async ()=> {
    setLoading(true)
    if( entry?.properties?.type==='initiative' && entry.id ){
      try {
        await router.push(
          { 
            pathname: `/initiative/[id]`, 
            query: { id: entry.id },
            // auth: auth.getJWTToken()
          }, `/initiative/${entry.id}`, { locale } )
        // setLoading(false)
      }catch(e){
        setLoading(false)
      }
    }
  }

  return entry && 
    <Card {...{onClick}}>
      {loading && <Loader left='5px' top='5px'/>}
      <Thumbnail src={entry?.properties?.image+'?w=100&h=100&q=90'}/>
      <Content>
        <TopBar>
          <Metrics>
            <div><Icon><People/></Icon>{entry?.properties?.members}</div>
            { dist && 
              <div>
                <Icon><Location/></Icon>
                { dist<1000?
                  formatMeters(dist) + t`m from me`:
                  formatMeters(dist/1000) + t`km from me`
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