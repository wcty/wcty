import { useLayout, useUser } from 'common';
import IconButton from 'components/IconButton';
// @ts-ignore
import { SlideRenderProps } from 'react-swipeable-views-workspace/packages/react-swipeable-views-utils';
import { atom } from 'recoil';
import { slideRenderer } from './slideRenderer';
import { LeftArrow, RightArrow, SwipeableViews } from './styles';
import useSlides from './useSlides';

export default function Slides(){
  const user = useUser()
  const layout = useLayout()
  const {index, onChangeIndex, nearbyEntries} = useSlides()
  
  return (
    layout==='mobile'?
    <SwipeableViews
      {...{index, onChangeIndex}}
      slideCount={nearbyEntries?.entries_nearby.length||2}
      overscanSlideAfter={2}
      overscanSlideBefore={2}
      enableMouseEvents
      slideRenderer={(v:SlideRenderProps)=>
          slideRenderer({...v, entry: {...nearbyEntries?.entries_nearby}?.[v.key] }
      )}
    />:
    <>
      <LeftArrow>
        <IconButton 
          onClick={()=>onChangeIndex(index-1)} 
          icon='arrow-left'/>
      </LeftArrow>
      <RightArrow>
        <IconButton 
          onClick={()=>onChangeIndex(index+1)} 
          icon='arrow-right'/>
      </RightArrow>
    </>
  )
};

Slides.index = atom({
  key:'slideIndex',
  default: 0
})
