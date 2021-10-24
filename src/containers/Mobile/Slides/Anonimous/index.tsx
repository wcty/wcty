import { useNearbyEntriesQuery } from 'generated';
import { useRecoilState } from 'recoil';
import { SwipeableViews } from '../styles';
import { Map } from 'components'
import { useEffect } from 'react';
import { slideRenderer } from './slideRenderer';
import { SlideRenderProps } from 'react-swipeable-views-utils';
import { atoms, toSelected, usePrevious } from 'common';
import Slides from '..'

export default function Anonimous(){
  const [focus, setFocus] = useRecoilState(atoms.focalPoint)
  const [view, setViewport] = useRecoilState(Map.viewport)
  const [selected, setSelected] = useRecoilState(Map.selected)
  const [layers, setLayers] = useRecoilState(Map.layers)

  useEffect(()=>{
    if(!focus){
      setFocus([view.longitude, view.latitude])
    }
  },[focus,view])

  const location = {
    type: 'Point',
    coordinates: focus? focus: [view.longitude, view.latitude]
  }
  const [index, setIndex] = useRecoilState(Slides.index)
  const prevIndex = usePrevious(index)
  const {data:nearbyEntries, fetchMore} = useNearbyEntriesQuery({variables:{location, limit: 5, type: layers }})

  useEffect(()=>{
    const len = nearbyEntries?.entries_nearby.length
    if(len && index>=(len-2)){
      console.log('loaded more', len, layers)
      fetchMore({variables:{ offset: len }})
    }    
  },[index, nearbyEntries?.entries_nearby.length])

  useEffect(()=>{
    const entry = {...nearbyEntries?.entries_nearby?.[index]||{}}
    if(entry && (index===0 || index!==prevIndex)){
      setViewport({
        longitude: entry.geometry?.coordinates[0]||0,
        latitude: entry.geometry?.coordinates[1]||0,
        zoom: 18,
        viewportChangeMethod:'easeTo'
      })
      setSelected(toSelected(entry))
    }
  },[ index, prevIndex, nearbyEntries ])

  function onChangeIndex(i:number){
    if(i>=0 && i<=(nearbyEntries?.entries_nearby.length||1)-1){
      setIndex(i)
    }
  }
  
  return (
    <SwipeableViews
      {...{index, onChangeIndex}}
      slideCount={nearbyEntries?.entries_nearby.length||2}
      overscanSlideAfter={2}
      overscanSlideBefore={2}
      enableMouseEvents
      slideRenderer={(v:SlideRenderProps)=>
          slideRenderer({...v, entry: {...nearbyEntries?.entries_nearby}?.[v.key] }
      )}
    />
  )
};
