import { Initiatives } from "generated"
import { atoms, useAddress } from "shared"
import { useRecoilState } from "recoil"
import { ListItem } from "./styles"
import { Map } from 'components'
import { InitiativeCardFragment } from 'generated'
import Sidepanel from "."

export function ListRow({ data:v, source }:{
  data: InitiativeCardFragment,
  source: string
}){

  const address = useAddress(v.geometry.coordinates)
  const [selected, setSelected] = useRecoilState(Map.selected)
  const [viewport, setViewport] = useRecoilState(Map.viewport)
  const [open, setOpen] = useRecoilState(Sidepanel.open)
  
  function onClick(){
    setSelected({
      id: v.id,
      type: 'Feature',
      source,
      geometry: v.geometry,
      properties: {
        name: v.name,
        image: v.image,
        description: v.description||'',
        created_at: v.created_at,
        id: v.id
      }
    })
    setViewport({
      longitude: v.geometry.coordinates[0],
      latitude: v.geometry.coordinates[1],
      zoom: 15.5,
      viewportChangeMethod: 'easeTo',
      viewportChangeOptions: {offset:[145,50]}
    })
    setOpen(false)
  }

  return <ListItem {...{onClick}}>
    <img src={v.image+'?w=30&h=30&q=90'}/>
    <div>
      <span>{v.name}</span>
      <span className='address'>{address}</span>
    </div>
  </ListItem>
}
