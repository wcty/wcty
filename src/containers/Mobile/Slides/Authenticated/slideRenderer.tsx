import { SlideRendererCallback, SlideRenderProps } from 'react-swipeable-views-utils';

export function slideRenderer(params:SlideRenderProps){
  const { index, key } = params;

  return (
    <div style={undefined} key={key}>
      {`slide n°${index + 1}`}
    </div>
  );
}
