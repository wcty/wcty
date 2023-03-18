import { useNearbyEntriesQuery } from 'generated';
import { useRecoilState } from 'recoil';
import { useEffect } from 'react';
import { atoms, toSelected, useLayout, usePrevious } from 'common';
import Slides from '.'

export default function Anonimous(){
  const [focus, setFocus] = useRecoilState(atoms.focalPoint)
  const [view, setViewport] = useRecoilState(atoms.viewport)
  const [selected, setSelected] = useRecoilState(atoms.selected)
  const layout = useLayout()

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
  const {data:nearbyEntries, fetchMore} = useNearbyEntriesQuery({variables:{location, limit: 5, type: ['initiative'] }})

  useEffect(()=>{
    const len = nearbyEntries?.entries_nearby.length
    if(len && index>=(len-2)){
      fetchMore({variables:{ offset: len }})
    }    
  },[index, nearbyEntries?.entries_nearby.length])

  useEffect(()=>{
    const entry = {...nearbyEntries?.entries_nearby?.[index]||{}}
    if(entry && (index===0 || index!==prevIndex)){
      setViewport({
        longitude: entry.geometry?.coordinates[0]||0,
        latitude: entry.geometry?.coordinates[1]||0,
        zoom: 16,
        viewportChangeMethod: 'easeTo',
        viewportChangeOptions: 
          layout==='desktop'?
            {offset:[145,50]}:
            {offset:[0,0]}
      })
      setSelected(
        toSelected(entry))
    }
  },[ index, prevIndex, nearbyEntries ])

  function onChangeIndex(i:number){
    if(i>=0 && i<=(nearbyEntries?.entries_nearby.length||1)-1){
      setIndex(i)
    }
  }

  //Effect to listen to keys and change slides
  useEffect(()=>{
    const handleKeyDown = (e:KeyboardEvent)=>{
      if(e.code==='ArrowLeft'){
        onChangeIndex(index-1)
      }
      if(e.code==='ArrowRight'){
        onChangeIndex(index+1)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return ()=>{
      window.removeEventListener('keydown', handleKeyDown)
    }
  },[index, onChangeIndex])

  return {index, onChangeIndex, nearbyEntries}
}
