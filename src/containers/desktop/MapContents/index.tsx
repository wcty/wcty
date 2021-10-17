import { Layer, Source, Popup } from "@urbica/react-map-gl";
import { Map } from "components";
import { atoms } from 'common';
import { useRecoilState } from "recoil";
import InitiativePopup from "./InitiativePopup";

export default function MapContents(){
  const [cursor, setCursor] = useRecoilState(Map.cursor)
  const [selected, setSelected] = useRecoilState(Map.selected)
  const [viewport, setViewport] = useRecoilState(Map.viewport)
  const [layers, setLayers] = useRecoilState(Map.layers)

  
  return <>
    <Source
      id="initiatives"
      type="vector"
      url="https://tiles.weee.city/public.initiatives_view.json"
      promoteId="id"
    />
    <Source
      id="orgs"
      type="vector"
      url="https://tiles.weee.city/public.orgs.json"
      promoteId="id"
    />

    {layers.includes('initiative') && <Layer
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
            zoom: 16,
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
        "symbol-z-order": 'source',
        "symbol-sort-key": ['case', ['==',['id'], selected?.id||''], 0, 1],
        'icon-size': ["interpolate",
          ["linear"],
          ['zoom'],
            9, ['case',['==',['id'], selected?.id||''], 1, 0.2],
            16, ['case',['==',['id'], selected?.id||''], 1.8, 1.35]
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
    />}
    {layers.includes('organization') && <Layer
      id="orgs"
      source="orgs"
      source-layer="public.orgs"
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
        'icon-image': 'org',
        'icon-anchor': 'bottom-left',
        'icon-allow-overlap': false,
        'icon-ignore-placement': false,
        "symbol-z-order": 'source',
        "symbol-sort-key": ['case', ['==',['id'], selected?.id||''], 0, 1],
        'icon-size': ["interpolate",
          ["linear"],
          ['zoom'],
            9, ['case',['==',['id'], selected?.id||''], 1, 0.2],
            16, ['case',['==',['id'], selected?.id||''], 1.8, 1.35]
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
    />}

    <>{ selected && <InitiativePopup/> }</>
  </>
}
