import { Source, FeatureState } from '@urbica/react-map-gl';
import { atoms } from 'common';
import { Map } from 'components';
import { useRecoilState } from 'recoil';

export default function MapContents(){
  const [selected] = useRecoilState(Map.selected)
  const [focus] = useRecoilState(atoms.focalPoint)

  return <>
    <Source
      id='pin'
      type='geojson'
      data={{
        type: 'Feature',
        properties:{},
        geometry: {
          type: 'Point',
          coordinates: focus||[0,0]
        }
      }}
    />
    <Source
      id='entries'
      type='vector'
      url='https://tiles.weee.city/public.entries.json'
      promoteId='id'
    >
      <FeatureState source='entries' sourceLayer='public.entries' id={selected?.id||''} state={{selected:true}}/>
    </Source>
    <Source
      id='selected_entry'
      type='geojson'
      data={{
        type:'Feature',
        geometry: selected?.geometry||{type:'Point',coordinates:[0,0]},
        properties: selected?.properties||{}
      }}
      promoteId='id'
    />
  </>
}
