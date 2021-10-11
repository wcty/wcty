import { Initiatives } from "generated"
import { useAddress } from "misc"
import { useRecoilState } from "recoil"
import { ListItem } from "./styles"
import { Map } from 'components'

export function ListRow({ data:v }:{
  data: Pick<Initiatives, "image" | "name" | "geom">
}){

  const address = useAddress(v.geom.coordinates)
  const [selected, setSelected] = useRecoilState(Map.selected)
  function onClick(){
    // setSelected({
    //   id: v.
    //   geometry: v.geom
    // })
  }

  return <ListItem {...{onClick}}>
    <img src={v.image+'?w=30&h=30&q=90'}/>
    <div>
      <span>{v.name}</span>
      <span className='address'>{address}</span>
    </div>
  </ListItem>
}
