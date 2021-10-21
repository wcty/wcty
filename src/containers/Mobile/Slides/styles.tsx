import styled from 'styled-components'
import SwipeableViewsUnstyled from 'react-swipeable-views';
import { virtualize, bindKeyboard } from 'react-swipeable-views-utils';

const VirtualizeSwipeableViews = bindKeyboard(virtualize(SwipeableViewsUnstyled));

export const
SwipeableViews = styled(VirtualizeSwipeableViews).attrs({
  style: {padding: '0 19px'},
  slideStyle: {padding: '0px 0px'},
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
      >div{
        height: 100%;
        margin: 0 9px;
        background-color: ${p=>p.theme.colors.backgroundActive};
      }
    }
  }
`