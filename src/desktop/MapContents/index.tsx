import { Layer, Source, Popup } from "@urbica/react-map-gl";
import { Map } from "components";
import { atoms } from "shared";
import { useRecoilState } from "recoil";
import InitiativePopup from "./InitiativePopup";

export default function MapContents(){
  const [cursor, setCursor] = useRecoilState(Map.cursor)
  const [selected, setSelected] = useRecoilState(Map.selected)
  const [viewport, setViewport] = useRecoilState(Map.viewport)

  
  return <>
    <Source
      id="initiatives"
      type="vector"
      url="https://tiles.weee.city/public.initiatives_view.json"
      promoteId="id"
    />
    <Layer
      id="initiatives"
      source="initiatives"
      source-layer="public.initiatives_view"
      type="symbol"
      onClick={({features})=>{
        const feature = JSON.parse(JSON.stringify(features[0])) as typeof features[number]
        if(feature.id!==selected?.id){
          console.log(feature.id)
          setViewport({
            longitude: feature.geometry.coordinates[0],
            latitude: feature.geometry.coordinates[1],
            zoom: 15.5,
            viewportChangeMethod: 'easeTo',
            viewportChangeOptions: {offset:[145,50]}
          })
          setSelected({
            ...feature,
            geometry: feature.geometry
          })
        }
      }}
      onEnter={()=>setCursor('pointer')}
      onLeave={()=>setCursor('')}
      paint={{
        'text-color': 'black',
        'text-opacity': ["step", ['zoom'], 0, 15, 1 ],
        'text-halo-width': 1,
        'text-halo-color': "white",   
      }}
      layout={{
        'icon-image': 'initiative',
        'icon-anchor': 'bottom-left',
        'icon-allow-overlap': false,
        'icon-ignore-placement': false,
        'icon-size': 
          ["interpolate",
            ["linear"],
            ['zoom'],
              9, 0.2,
              16, 1.35
          ],
        'text-allow-overlap': true,
        'text-ignore-placement': true,
        'symbol-spacing': 1,
        // 'text-field': ['get', 'name'],
        'text-anchor': 'top',
        'text-font': ["Montserrat SemiBold"],
        'text-size': 13,
        'text-padding': 0,
        'text-offset': [0, 0]
      }}
    />

    <>{ selected && <InitiativePopup/> }</>
  </>
}
