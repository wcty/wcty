import { atoms, useAddress } from 'common'
import { useRecoilState } from "recoil"
import { ListItem } from "./styles"
import { InitiativeCardFragment } from 'generated'

export default function ListRow({ data:v, onClick:_onClick }:{
  data: InitiativeCardFragment&{type: string},
  onClick?: ()=>void
}){
  const address = useAddress(v?.geometry?.coordinates||[0,0])
  const [selected, setSelected] = useRecoilState(atoms.selected)
  const [viewport, setViewport] = useRecoilState(atoms.viewport)
  

  if(!v.id){
    return null
  }
  
  function onClick(){
    const description = 
      v.infos?.[0].problem? (v.infos?.[0].problem + '\n'):'' + 
      v.infos?.[0].goal? (v.infos?.[0].goal + '\n'):'' + 
      v.infos?.[0].context||''

    setSelected({
      id: v.id,
      type: 'Feature',
      source: v.type,
      geometry: v.geometry,
      properties: {
        name: v.name||'',
        image: v.image||'',
        description,
        created_at: v.created_at,
        id: v.id,
        modified_at: '',
        address: '',
        type: v.type
      }
    })
    if(v?.geometry?.coordinates){
      setViewport({
        longitude: v.geometry.coordinates[0],
        latitude: v.geometry.coordinates[1],
        zoom: 15.5,
        viewportChangeMethod: 'easeTo',
        viewportChangeOptions: {offset:[145,50]}
      })
      _onClick && _onClick()
    }
  }
  return <ListItem {...{onClick}}>
    <img src={v.image+'?w=30&h=30&q=90'}/>
    <div>
      <span style={{textAlign:'start'}}>{v.name}</span>
      <span style={{textAlign:'start'}} className='address'>{v?.geometry?.coordinates? address: ''}</span>
    </div>
  </ListItem>
}
