import { toSelected } from 'common';
import { InitiativeCard } from 'components';
import type { NearbyEntriesQuery } from 'generated';
import type { SlideRenderProps } from 'react-swipeable-views-utils';

declare module "react-swipeable-views-utils" {
  interface SlideRenderProps {
    entry?: NearbyEntriesQuery['entries_nearby'][number];
  }
}

export function slideRenderer(params:SlideRenderProps){
  const { index, key, entry } = params;

  return ( entry ?
    <InitiativeCard 
      entry={toSelected({...entry})}
    {...{ key }} /> : <div {...{ key }}></div>
  );
}
