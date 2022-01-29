import { toSelected } from 'common';
import InitiativeCard from 'components/InitiativeCard';
//@ts-ignore
import type { SlideRenderProps } from '@gromy/react-swipeable-views-utils';

export function slideRenderer(params:SlideRenderProps){
  const { index, key, entry } = params;

  return ( entry ?
    <InitiativeCard 
      entry={toSelected({...entry})}
    {...{ key }} /> : <div {...{ key }}></div>
  );
}
