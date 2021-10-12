import { useRecoilState } from "recoil"
import { Map } from 'components'
import { Popup, Thumbnail, Content, TopBar, BottomPanel, Button, Metrics, Icon } from "./styles";
import { useEffect } from "react";
import { ReactComponent as People } from 'assets/icons/popupPeople.svg'
import { ReactComponent as Location } from 'assets/icons/popupLocation.svg'
import { useGeolocation, useI18n } from "shared";
import distance from '@turf/distance'
import {format} from 'd3-format'

const formatMeters = format(',.2r')

export default function InitiativePopup(){
  const [selected, setSelected] = useRecoilState(Map.selected)
  const loc = useGeolocation()
  const dist = selected && loc && distance(
    selected.geometry.coordinates, 
    [loc.longitude, loc.latitude],
    { units:'meters' }
  )
  const i18n = useI18n()

  useEffect(()=>{
    console.log(selected)
  },[selected])

  return selected && 
    <Popup closeButton={false} closeOnClick={false}  latitude={selected?.geometry.coordinates[1]} longitude={selected?.geometry.coordinates[0]} anchor="bottom-right">
      <Thumbnail src={selected?.properties.image+'?w=100&h=100&q=90'}/>
      <Content>
        <TopBar>
          <Metrics>
            <div><Icon><People/></Icon>{selected.properties.members}</div>
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
          <span>{selected.properties.name}</span>
        </BottomPanel>
      </Content>
    </Popup>
}