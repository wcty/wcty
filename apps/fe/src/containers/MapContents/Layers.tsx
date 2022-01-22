import { Layer } from '@urbica/react-map-gl';
import { atoms, useLayout } from 'common';
import { InitiativeCard } from 'components';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { Popup } from './styles';
import { Map } from 'mapbox-gl'

export default function MapContents({map}:{map:Map}){
  const [cursor, setCursor] = useRecoilState(atoms.cursor)
  const [selected, setSelected] = useRecoilState(atoms.selected)
  const [viewport, setViewport] = useRecoilState(atoms.viewport)
  const [layers] = useRecoilState(atoms.layers)
  const layout = useLayout()
  const router = useRouter()
  const isEntryCreation = router.pathname.includes('/create-initiative')
  const [focus, setFocus] = useRecoilState(atoms.focalPoint)
  // const {map} = useContext(atoms.Context)
  // const isSourceLoading = true//!map?.getSource('entries')

  return <>
    {isEntryCreation && focus?<>
      <Layer
        id='pin'
        source='pin'
        type='symbol'
        layout={{
          'icon-image': 'pin',
          'icon-anchor': 'bottom',
          'icon-allow-overlap': true,
          'icon-ignore-placement': true,
          'icon-size': 0.4
        }}
      />
    </>:<>
    {map.getSource('entries') && <Layer
      id='entries'
      source='entries'
      source-layer='public.entries'
      type='symbol'
      onClick={({features})=>{
        const feature = JSON.parse(JSON.stringify(features[0])) as typeof features[number]
        console.log(feature)
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
          setFocus(feature.geometry.coordinates)
        }
      }}
      onEnter={()=>setCursor('pointer')}
      onLeave={()=>setCursor('')}
      paint={{
        'text-color': 'black',
        'text-opacity': ['step', ['zoom'], 0, 15, 1 ],
        'text-halo-width': 1,
        'text-halo-color': 'white',   
      }}
      layout={{
        'icon-image': ['case', ['==',['get', 'type'],'initiative'],'initiative','org'],
        'icon-anchor': 'bottom-left',
        'icon-allow-overlap': false,
        'icon-ignore-placement': false,
        'icon-size': ['interpolate',
          ['linear'],
          ['zoom'],
            9, ['case',['==',['id'], selected?.id||''], 1, 0.2],
            16, ['case',['==',['id'], selected?.id||''], 1.8, 1.35]
        ],
        'text-allow-overlap': true,
        'text-ignore-placement': true,
        'symbol-spacing': 1,
        // 'text-field': ['get', 'name'],
        'text-anchor': 'top',
        'text-font': ['Montserrat SemiBold'],
        'text-size': 13,
        'text-padding': 0,
        'text-offset': [0, 0]
      }}
      filter={
        layers.length===2? ['!=',['id'],'']:
        layers.includes('initiative')?
        ['case', ['==',['get','type'],'initiative'], true, false]:
        ['case', ['==',['get','type'],'organization'], true, false]
      }
    />}
    {map.getSource('selected_entry') && <Layer
      id='selected_entry'
      source='selected_entry'
      type='symbol'
      onEnter={()=>setCursor('pointer')}
      onLeave={()=>setCursor('')}
      paint={{
        'text-color': 'black',
        'text-opacity': ['step', ['zoom'], 0, 15, 1 ],
        'text-halo-width': 1,
        'text-halo-color': 'white',   
      }}
      layout={{
        'icon-image': ['case', ['==',['get', 'type'],'initiative'],'initiative','org'],
        'icon-anchor': 'bottom-left',
        'icon-allow-overlap': false,
        'icon-ignore-placement': false,
        'icon-size': ['interpolate',
          ['linear'],
          ['zoom'],
            9, ['case',['==',['id'], selected?.id||''], 1, 0.2],
            16, ['case',['==',['id'], selected?.id||''], 1.8, 1.35]
        ],
        'text-allow-overlap': false,
        'text-ignore-placement': false,
        'symbol-spacing': 1,
        // 'text-field': ['get', 'name'],
        'text-anchor': 'top',
        'text-font': ['Montserrat SemiBold'],
        'text-size': 13,
        'text-padding': 0,
        'text-offset': [0, 0]
      }}
      filter={
        layers.length===2? ['!=',['id'],null]:
        layers.includes('initiative')?
        ['case', ['==',['get','type'],'initiative'], true, false]:
        ['case', ['==',['get','type'],'organization'], true, false]
      }
    />}
    <>{ selected && selected?.geometry?.coordinates && layout==='desktop' &&
      <Popup 
        closeButton={false} 
        closeOnClick={false}  
        latitude={selected.geometry.coordinates[1]} 
        longitude={selected.geometry.coordinates[0]} 
        anchor="bottom-right">
          <InitiativeCard entry={selected}/> 
      </Popup>
    }</>
    </>}
  </>
}
