import { toSelected } from 'common';
import { InitiativeCard } from 'components';
import type { NearbyEntriesQuery } from 'generated';
//@ts-ignore
import type { SlideRenderProps } from '@gromy/react-swipeable-views-utils';

// declare module "@gromy/react-swipeable-views-utils" {
//   interface SlideRenderProps {
//     entry?: NearbyEntriesQuery['entries_nearby'][number];
//   }
// }

export function slideRenderer(params:SlideRenderProps){
  const { index, key, entry } = params;

  return ( entry ?
    <InitiativeCard 
      entry={toSelected({...entry})}
    {...{ key }} /> : <div {...{ key }}></div>
  );
}
