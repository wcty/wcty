import styled, { css } from 'styled-components'
//@ts-ignore
import SwipeableViewsUnstyled from '@gromy/react-swipeable-views';
//@ts-ignore
import { virtualize } from '@gromy/react-swipeable-views-utils';

const VirtualizeSwipeableViews = virtualize(SwipeableViewsUnstyled);

export const CarouselWrapper = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100 !important;
  background-color: rgba(0,0,0,0.8);
`,

Image = styled.img`
  ${p=>p.theme.layout==='desktop'?
    css`
      height: 100%;
      max-width: 100%;
    `:
    css`
      width: 100%;
      max-height: 100%;
    `}
  object-fit: contain;
`,

LeftArrow = styled.div`
  position: absolute;
  left: 2rem;
  top: 50%;
  cursor: pointer;
`,

RightArrow = styled.div`
  position: absolute;
  right: 2rem;
  top: 50%;
  cursor: pointer;
`,

CloseIcon = styled.div`
  position: absolute;
  right: 2rem;
  top: 2rem;
  cursor: pointer;
  opacity: 0.5;
`,

GalleryIcon = styled.div`
  position: absolute;
  right: 2rem;
  top: 6rem;
  cursor: pointer;
  opacity: 0.5;
`,

SwipeableViews = styled(VirtualizeSwipeableViews).attrs({
  style: {padding: '0 0px', overflowX: 'hidden', height: '100vh'},
  slideStyle: {padding: '0px 0px', overflow:'visible', display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center'},
  resistance: true
})`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  >div{
    >div{
      padding: 15px;
      min-height: 100px;
      color: black;
      overflow: visible;
      >div{
        height: 100%;
        overflow: visible;
        margin-left: 5px;
        margin-right: 5px;
        background-color: #fff;
      }
    }
  }
`
