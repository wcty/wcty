import { toSelected } from 'common';
import { InitiativeCard } from 'components';
import { NearbyEntriesQuery } from 'generated';
import { SlideRenderProps } from 'react-swipeable-views-utils';
import { FeedProps } from '../types';

declare module "react-swipeable-views-utils" {
  interface SlideRenderProps {
    entry?: NearbyEntriesQuery['entries_nearby'][number];
  }
}


export function slideRenderer(params:SlideRenderProps){
  const { index, key, entry } = params;

  return ( entry ?
    <InitiativeCard 
      entry={toSelected(entry)}
    {...{ key }} /> :null
  );
}
