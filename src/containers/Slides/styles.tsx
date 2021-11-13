import styled from 'styled-components'
import SwipeableViewsUnstyled from 'react-swipeable-views';
import { virtualize, bindKeyboard } from 'react-swipeable-views-utils';

const VirtualizeSwipeableViews = virtualize(SwipeableViewsUnstyled);

export const
SwipeableViews = styled(VirtualizeSwipeableViews).attrs({
  style: {padding: '0 15px', overflowX: 'visible'},
  slideStyle: {padding: '0px 0px', overflow:'visible'},
  resistance: true
})`
  position: absolute;
  bottom: 18px;
  width: 100%;
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
`