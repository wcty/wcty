import { Layer, FeatureState } from '@urbica/react-map-gl';
import { atoms, useLayout } from 'common';
import InitiativeCard from 'components/InitiativeCard';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { Popup } from './styles';
import { Map } from 'mapbox-gl'
import { startTransition, useEffect, useState } from 'react';
import { waitForFeatures } from '.';

export default function MapContents({map}:{map:Map}){
  const [cursor, setCursor] = useRecoilState(atoms.cursor)
  const [selected, setSelected] = useRecoilState(atoms.selected)
  const [viewport, setViewport] = useRecoilState(atoms.viewport)
  const [layers] = useRecoilState(atoms.layers)
  const layout = useLayout()
  const router = useRouter()
  const isEntryCreation = router.pathname.includes('/create-initiative')
  const [focus, setFocus] = useRecoilState(atoms.focalPoint)
  const [cluster, setCluster] = useState<GeoJSON.FeatureCollection>({type: 'FeatureCollection', features: []})
  const [hovered, setHovered] = useState<string>('')

  useEffect(()=>{
    setTimeout(async ()=>{
      const features = await waitForFeatures(()=>map?.getLayer('entries') && map?.queryRenderedFeatures(undefined, {layers:['entries']}))
      if(features)
        startTransition(()=>setCluster({type: 'FeatureCollection', features}))
    }, 250)
  },[viewport, map, selected])


  useEffect(()=>{
    map?.on('click',(e)=>{
      console.log(map.queryRenderedFeatures(e.point)?.map(f=>f.layer.id))
    })
  },[map])

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
    <>
    <Layer
        id='entries-dummy'
        source='entries'
        source-layer='public.entries'
        type='circle'
        paint={{'circle-opacity': 0}}
        filter={
          layers.length===2? ['all',['!=',['id'],'']]:
          layers.includes('initiative')?
          ['all', [ 'case', ['==',['get','type'],'initiative'], true, false]]:
          ['all', ['case', ['==',['get','type'],'organization'], true, false]]
        }
      />
      <Layer
        id='entries-clusters'
        source='entries-clusters'
        type='circle'
        onClick={((e:any)=>{
          const coords = e.features?.[0]?.geometry?.coordinates
          setViewport({
            ...viewport, 
            zoom: viewport.zoom+1,
            ...(coords? {latitude:coords[1], longitude: coords[0]}:{})
          })
        })}
        onEnter={(e:any)=>{setHovered(e?.features?.[0]?.properties?.cluster_id); setCursor('pointer')}}
        onLeave={(e:any)=>{setHovered(''); setCursor('')}}
        paint={{
          'circle-color': 'black',
          'circle-radius': [
            'interpolate',
            ['linear'],
            ['get', 'point_count'],
            1, ['case', ['==', ['get', 'cluster_id'], hovered||''], 16, 15 ],
            20, ['case', ['==', ['get', 'cluster_id'], hovered||''], 21, 20 ],
            100, ['case', ['==', ['get', 'cluster_id'], hovered||''], 41, 40 ],
            120, ['case', ['==', ['get', 'cluster_id'], hovered||''], 46, 45 ]
            ]
        }}
        filter={
          layers.length===2? ['all',['!=',['id'],''], ['has', 'point_count']]:
          layers.includes('initiative')?
          ['all', ['has', 'point_count'], [ 'case', ['==',['get','type'],'initiative'], true, false]]:
          ['all', ['has', 'point_count'], [ 'case', ['==',['get','type'],'organization'], true, false]]
        }
      />

      <Layer 
        id='cluster-count'
        type='symbol'
        source='entries-clusters'
        filter={['has', 'point_count']}
        paint={{
          'text-color': 'white',
          'text-opacity-transition': {
            "duration": 0,
            "delay": 0
          }
        }}
        layout={{
          'text-field': '{point_count_abbreviated}',
          'text-font': ['Montserrat SemiBold'],
          'text-size': [
            'interpolate',
            ['linear'],
            ['get', 'point_count'],
            1, ['case', ['==', ['get', 'cluster_id'], hovered||''], 15, 14 ],
            20, ['case', ['==', ['get', 'cluster_id'], hovered||''], 17, 16 ],
            100, ['case', ['==', ['get', 'cluster_id'], hovered||''], 19, 18 ]
            ]
        }}
      />
      <Layer
        id='entries'
        source='entries-clusters'
        type='symbol'
        onClick={({features}:any)=>{
          const feature = JSON.parse(JSON.stringify(features[0])) as typeof features[number]
          if(feature.id!==selected?.id){
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
        onEnter={(e:any)=>{setHovered(e?.features?.[0]?.id||''); setCursor('pointer')}}
        onLeave={(e:any)=>{setHovered(''); setCursor('')}}
        paint={{
          'text-color': 'black',
          'text-opacity': ['step', ['zoom'], 0, 15, 1 ],
          'text-halo-width': 1,
          'text-halo-color': 'white',   
        }}
        layout={{
          'icon-image': ['case', ['==',['get', 'type'],'initiative'],'initiative','org'],
          'icon-anchor': 'bottom-left',
          'icon-allow-overlap': true,
          'icon-ignore-placement': false,
          'icon-size': ['case',['==',['id'], selected?.id||''], 1.8, [ '==',['id'],hovered||''], 1.5, 1.35],
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
          layers.length===2? ['all',['!=',['id'],''], ['!', ['has', 'point_count']]]:
          layers.includes('initiative')?
          ['all', ['!', ['has', 'point_count']], [ 'case', ['==',['get','type'],'initiative'], true, false]]:
          ['all', ['!', ['has', 'point_count']], ['case', ['==',['get','type'],'organization'], true, false]]
        }
      />
    </>

    <>{ selected && selected?.geometry?.coordinates && layout==='desktop' && cluster.features.find(f=>f?.properties?.id===selected.id) &&
      <Popup 
        closeButton={false} 
        closeOnClick={false}  
        latitude={selected?.geometry?.coordinates[1]||0} 
        longitude={selected?.geometry?.coordinates[0]||0} 
        anchor="bottom-right">
          <InitiativeCard entry={selected}/> 
      </Popup>
    }</>
    </>}
  </>
}
