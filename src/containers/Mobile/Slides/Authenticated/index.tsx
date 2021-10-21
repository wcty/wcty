import { useUser } from 'common';
import { useLastEntriesQuery, useNearbyEntriesQuery } from 'generated';
import { useRecoilState } from 'recoil';
import { SwipeableViews } from '../styles';
import { Map } from 'components'
import { useState } from 'react';
import { slideRenderer } from './slideRenderer';

export default function Slides(){
  const user = useUser()
  const [view] = useRecoilState(Map.viewport)
  const [selected, setSelected] = useRecoilState(Map.selected)
  const location = {
    type: 'Point',
    coordinates: [view.longitude, view.latitude]
  }
  const {data:LastEntries} = useLastEntriesQuery({variables:{ user_id:user?.id||'' }})
  const {data:NextEntries} = useNearbyEntriesQuery({variables:{ user_id:user?.id||'', own: true, location }})
  
  const [index, setIndex] = useState(0)

  return (
    <SwipeableViews
      {...{index, slideRenderer}}
      onChangeIndex={(i)=>setIndex(i)}
    />
  )
};