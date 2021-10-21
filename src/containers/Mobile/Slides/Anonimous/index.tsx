import { useNearbyEntriesQuery } from 'generated';
import { atom, useRecoilState } from 'recoil';
import { SwipeableViews } from '../styles';
import { Map } from 'components'
import { useContext, useEffect, useState } from 'react';
import { slideRenderer } from './slideRenderer';
import { SlideRenderProps } from 'react-swipeable-views-utils';
import { toSelected, usePrevious } from 'common';

export default function Slides(){
  const [view, setViewport] = useRecoilState(Map.viewport)
  const [selected, setSelected] = useRecoilState(Map.selected)
  const location = {
    type: 'Point',
    coordinates: [view.longitude, view.latitude]
  }
  const [index, setIndex] = useRecoilState(Slides.index)
  const prevIndex = usePrevious(index)
  const {data:nearbyEntries, fetchMore} = useNearbyEntriesQuery({variables:{location, limit: 5}})

  const {map} = useContext(Map.Context)

  useEffect(()=>{
    const len = nearbyEntries?.entries_nearby.length
    if(len && index>=(len-2)){
      console.log('loaded more', len)
      fetchMore({variables:{offset: len}})
    }    
  },[index])

  useEffect(()=>{
    const entry = nearbyEntries?.entries_nearby?.[index]

    if(entry && index!==prevIndex){
      setViewport({
        longitude: entry.geometry?.coordinates[0]||0,
        latitude: entry.geometry?.coordinates[1]||0,
        zoom: 14,
        viewportChangeMethod:'easeTo'
      })
      setSelected(toSelected(entry))
    }
  },[ index, prevIndex, nearbyEntries?.entries_nearby?.[index] ])

  function onChangeIndex(i:number){
    if(i<(nearbyEntries?.entries_nearby.length||1)-1){
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
          slideRenderer({...v, entry: nearbyEntries?.entries_nearby?.[v.key] }
      )}
    />
  )
};

Slides.index = atom({
  key:'slideIndex',
  default: 0
})
