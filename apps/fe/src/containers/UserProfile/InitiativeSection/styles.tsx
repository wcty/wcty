import styled, { css } from 'styled-components'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import SwipeableViewsUnstyled from '@gromy/react-swipeable-views';


export const
InitiativeSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  flex: 1 1 40%;
  background-color: ${p=>p.theme.colors.backgroundLighter};
  border-radius: 3px;
  position: relative;
  overflow: hidden;
`,


Avatar = styled.div<{src:string}>`
  border-radius: 50%;
  background-color: #f5f5f5;
  margin-bottom: 2rem;
  background-image: url(${p=>p.src});
  background-size: contain;
  height:0;
  width:100%;
  padding-bottom:100%;
  background-color:red;
`,

Slide = styled.div<{active?:boolean}>`
  width: 100px;
  height: 115px;
  background-color: ${p=>p.theme.colors.secondary};
  color: white;
  margin-right: 5px;
  border-radius: 3px;
  span, h1,h2,h3,h4,h5{
    margin-left: 1rem;
    display: block;
    line-height: 1.5;
    color: white;
  }
  ${p=>p.active&&css`
    background-color: ${p=>p.theme.colors.backgroundActive};
    span, h1,h2,h3,h4,h5{
      color: black;
    }
  `}
`,

SlideWrapper = styled.div`
  height: 115px;
  position: relative;
  display: flex;
  width: fit-content;
`,

SwipeableViews = styled(SwipeableViewsUnstyled).attrs({
  style: {padding: '0 15px', overflowX: 'hidden'},
  slideStyle: {padding: '0px 0px', overflow:'visible'},
  resistance: true
})`
  position: relative;
  top: 32px;
  width: 135px;
  overflow: visible !important;
  >div{
    >div{
      max-width: 105px;
      padding: 15px;
      /* color: black; */
      overflow: visible;
      >div{
        overflow: visible;
        margin-left: 5px;
        margin-right: 5px;
        /* background-color: #fff; */
      }
    }
  }
`,

Dots = styled.div`
  position: relative;
  display: flex;
  margin-top: 4rem;
  align-self: flex-end;
  margin-right: 10px;
`,

Dot = styled.div<{active?:boolean}>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${p=>p.theme.colors.line};
  margin-right: 12px;
  transition: width 0.2s ease-in-out, height 0.2s ease-in-out, background-color 0.2s ease-in-out, transform 0.2s ease-in-out;
  ${p=>p.active && css`
    transform: translate(0, -1px);
    width: 8px;
    height: 8px;
    background-color: ${p=>p.theme.colors.titleActive};
  `}
`,

InitiativeList = styled.div`
  position: relative;
  width: 100%;
  padding: 0 1rem;
`,

Icon = styled.div<{white?:boolean}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  ${p=>p.white && css`
    svg{
      fill: white;
      path{
        fill: white;
      }
    }
  `}
`
  