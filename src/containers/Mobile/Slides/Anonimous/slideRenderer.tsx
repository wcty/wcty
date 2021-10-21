import { NearbyEntriesQuery } from 'generated';
import { SlideRenderProps } from 'react-swipeable-views-utils';
import { FeedProps } from '../types';

declare module "react-swipeable-views-utils" {
  interface SlideRenderProps {
    entry?: NearbyEntriesQuery['entries_nearby'][number];
  }
}

export function slideRenderer(params:SlideRenderProps){
  const { index, key } = params;

  return (
    <div style={undefined} key={key}>
      {params.entry?.name}
    </div>
  );
}
