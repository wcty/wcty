import styled, { css } from 'styled-components'
//@ts-ignore
import SwipeableViewsUnstyled from '@gromy/react-swipeable-views';


export const
Header = styled.div`
  width: 100%;
  ${p=>p.theme.layout==='mobile'?
  css`
    padding: 0 2rem;
    text-align: center;
    >div{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `:
  css`
    margin-top:4rem;
    text-align: start;
    >div{
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  `}
  min-height: 3rem;
  display: flex;
`,

ButtonBack = styled.button.attrs({
  children: <div/>,
})`
  >div{
    transform: rotate(45deg);
    border-left: 2px solid black;
    border-bottom: 2px solid black;
    width: 12px;
    height: 12px;
  }
  border: none;
  width: 46px;
  background-color: transparent;
  cursor: pointer;
  transition: transform 0.5s ease-in-out;
  :hover{
    transform: translate(2.2px,2.2px);
  }
`,

Content = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  margin-top: 4rem;
`,

AccountSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-right: 50px;
  flex: 1 1 30%;
`,

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

ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  height: fit-content;
  flex: 1 1 30%;
  margin: 0 25px 0 25px;
  border-radius: 3px;
  padding: 4rem 2rem;
  background-color: ${p=>p.theme.colors.backgroundLighter};
  >div{
    height: 3rem;
  }
  svg{
    margin-right: 1rem;
  }
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
  