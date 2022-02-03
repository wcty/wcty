import { toSelected } from 'common';
import InitiativeCard from 'components/InitiativeCard';
import type { SlideRenderProps } from 'react-swipeable-views-utils';
import type { GalleryImage } from './index';
import { Image } from './styles'
export function slideRenderer(params:SlideRenderProps & { entry: GalleryImage}){
  const { index, key, entry } = params;

  return ( entry ? <Image src={entry.url} {...{ key }}/> : <div {...{ key }}></div>
  );
}
