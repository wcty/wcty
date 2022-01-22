import { Source, FeatureState } from '@urbica/react-map-gl';
import { atoms } from 'common';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { Map } from 'mapbox-gl'

export default function MapContents({map}:{map:Map}){
  const [selected] = useRecoilState(atoms.selected)
  const [focus] = useRecoilState(atoms.focalPoint)

  useEffect(()=>{
    if(!map.getSource('pin'))
    map.addSource('pin', {      
      type:'geojson',
      data:{
        type: 'Feature',
        properties:{},
        geometry: {
          type: 'Point',
          coordinates: focus||[30.52,50.45]
        }
      }
    })

    if(!map.getSource('entries'))
    map.addSource('entries', {      
      type: 'vector',
      url: 'https://tiles.weee.city/public.entries.json',
      promoteId: 'id'
    })

    if(!map.getSource('selected_entry'))
    map.addSource('selected_entry', {      
      type:'geojson',
      data:{
        type:'Feature',
        geometry: selected?.geometry||{type:'Point',coordinates:[0,0]},
        properties: selected?.properties||{}
      }
    })

  },[map])
  
  useEffect(()=>{
    //@ts-ignore
    map.getSource('pin')?.setData({      
        type: 'Feature',
        properties:{},
        geometry: {
          type: 'Point',
          coordinates: focus||[30.52,50.45]
        }
    })
  },[map, focus])

  useEffect(()=>{
    //@ts-ignore
    map.getSource('selected_entry')?.setData({      
      type:'Feature',
      geometry: selected?.geometry||{type:'Point',coordinates:[0,0]},
      properties: selected?.properties||{}
    })

  },[map, selected?.geometry, selected?.properties])

  return <>
    {/* <Source
      id='pin'
      type='geojson'
      data={{
        type: 'Feature',
        properties:{},
        geometry: {
          type: 'Point',
          coordinates: focus||[30.52,50.45]
        }
      }}
    />
    <Source
      id='entries'
      type='vector'
      url='https://tiles.weee.city/public.entries.json'
      promoteId='id'
    />
    <Source
      id='selected_entry'
      type='geojson'
      data={{
        type:'Feature',
        geometry: selected?.geometry||{type:'Point',coordinates:[0,0]},
        properties: selected?.properties||{}
      }}
      promoteId='id'
    /> */}
  </>
}
