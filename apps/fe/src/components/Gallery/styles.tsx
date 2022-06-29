import styled, { css } from 'styled-components'
//@ts-ignore
import SwipeableViewsUnstyled from '@gromy/react-swipeable-views';
//@ts-ignore
import { virtualize } from '@gromy/react-swipeable-views-utils';

const VirtualizeSwipeableViews = virtualize(SwipeableViewsUnstyled);

export const 
FullscreenCarouselWrapper = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  ${p=>p.theme.layout==='desktop' && css`
    background-color: rgba(0,0,0,0.8);`}
  z-index: 100 !important;
  user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
`,

LibraryWrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100 !important;
  user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
`,

LibraryTiles = styled.div`
  display: flex;
  flex: 0 0 380px;
  background: white;
  position: relative;
  padding-left: 2.5rem;
  padding-right: 1.0rem;
  overflow-y: scroll;
  padding-top: 6rem;
  padding-bottom: 0rem;
  overflow: hidden;
  ${p=>p.theme.isWebView && css`padding-top: calc(6rem + 29px);`}
`,

Grid = styled.div`
  padding-right: 1.5rem;
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  position: relative;
  padding-bottom: 3rem;
  overflow: visible;
`,

ImageThumb = styled.div.attrs((p:{
  src:string, alt:string, selected?: boolean
})=>({
  src: p.src,
  alt: p.alt,
  selected: p.selected
}))`
  position: relative;
  background-image: url(${p=>p.src});
  background-size: cover;
  background-position: center;
  border-radius: 3px;
  cursor: pointer;
  &:before {
    content: "";
    display: block;
    height: 0;
    width: 0;
    padding-bottom: calc(90/123 * 100%);
  }
  :hover{
    opacity: 0.975;
  }
  ${p=>p.selected && css`
    box-shadow: 2px 2px 4px ${p=>p.theme.colors.label};`}
`,

CarouselWrapper = styled.div`
  display: flex;
  flex: 1 1 auto;
  position: relative;
  background-color: rgba(0,0,0,0.8);
  flex-direction: column;
  max-height: 100vh;
`,

BottomPanel = styled.div`
  position: relative;
  ${p=>p.theme.layout==='desktop'?
    css`
      flex: 0 0 80px;
      align-items: center;
      justify-content: space-between;
    `:
    css`
      flex: 0 0 92px;
      flex-direction: column;
    `}
  display: flex;
  background: ${p=>p.theme.colors.primary};
  position: relative;
  div:first-child{
    display: flex;
    align-items: center;
    >h4>svg{
      margin-right: 0.5rem;
      margin-left: 2rem;
    }
  }
`,

ImageContainer = styled.div`
  position: relative;
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
  max-height: calc(100vh - 80px);
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
  position: relative;
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
  ${p=>p.theme.isWebView && css`padding-top: 29px;`}

`,

GalleryIcon = styled.div`
  position: absolute;
  right: 2rem;
  top: 6rem;
  cursor: pointer;
  opacity: 0.5;
  ${p=>p.theme.isWebView && css`padding-top: 29px;`}
`,

FullscreenIcon = styled.div`
  position: absolute;
  right: 2rem;
  bottom: 2rem;
  cursor: pointer;
  opacity: 0.5;
`,

SwipeableViews = styled(VirtualizeSwipeableViews).attrs({
  style: {padding: '0 0px', overflowX: 'hidden', height: '100% !important'},
  slideStyle: {padding: '0px 0px', overflow:'visible', display: 'flex', height: '100% !important', justifyContent: 'center', alignItems: 'center'},
  resistance: true
})`
  position: absolute;
  width: 100%;
  height: 100% !important;
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
