import styled, {css} from "styled-components";
import User from '@assets/icons/user.png'

export const 
SidepanelWrapper = styled.div<{open:false|'wide'|'menu'}>`
  z-index: 2 !important;
  top: 0px;
  left: 0px;
  position: absolute;
  display: flex;
  flex-direction: row;
  transition: min-height 0.5s, width 0.5s;
  align-items: stretch;
  overflow: hidden;
  ${p=>p.theme.layout==='mobile'&&css`min-height: 100%;`}
  box-shadow: 3px 0px 6px 6px rgba(0,0,0,0.05);
  ${(props)=>
    props.open==='menu'? 
    css`
      ${p=>p.theme.layout==='desktop' && css`min-height: 100%;`}
      width: 300px;
      div > div > div.thumb {
        transform: translate(0px,0px);
      }`:
    props.open==='wide'? (
      props.theme.layout==='desktop'?
      css`
        min-height: 100%;
        width: 330px;
        div.menu {
          width: 280px;
        }`:
      css`
        width: 100%;`
    ): 
    props.theme.layout==='desktop'?
    css`
      width: 50px;
      min-height: 0px;`:
    css`
      width: 0px;
        `
  }
`,

Stripe = styled.div`
  /* width: 50px; */
  /* height: 100%; */
  width: 100%;
  position: relative;
  background-color: #FFFFFF;
  flex: 0 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
`,

Menu = styled.div`
  ${p=>p.theme.layout==='desktop'?
  css<{}>`
    width: 250px;
    height: 100%;
    padding-left: 1rem;
  `:
  css<{}>`
    width: 100%;
    height: 100%;
    padding-left: 2rem;
  `}
  position: absolute;
  right: 0px;
  top: 0px;
  background-color: ${p=>p.theme.colors.primary};
  transition: width 0.5s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,

UserIconThumb = styled.div`
  position: absolute;
  right: 0px;
  transform: translate(15px,0px);
  background-color: white;
  height: 70px;
  width: 16px;
  transition: transform 0.5s;
  padding: 16px 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 4px 4px 0;
  div {
    width: 4px;
    background-color: #F0F4F8;
    height: 100%;
    z-index: -1;
  }
`,

UserIconCell = styled.div`
  width: 100%;
  height: 70px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  cursor: pointer;
  &[data-hovered=true]{
    background-color: #fcf9f3;
    cursor: pointer;
  }
`,

UserPhoto = styled.img`
  width: 40px;
  height: 40px;
  position: relative;
  background-color: grey;
  cursor: pointer;
  border-radius: 20px;
  overflow: hidden;
  :before {
    content: ' ';
    display: block;
    position: absolute;
    height: 50px;
    width: 50px;
    background-image: url(${User.src});
    background-size: 40px 40px;
    background-repeat: no-repeat;
    background-color: white;
  }
`,

UserIconRow = styled.div`
  ${p=>p.theme.layout==='desktop' && css<{}>`padding-right: 2rem;`}
  width: 100%;
  height: 70px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
  cursor: pointer;
  >span {
    ${p=>p.theme.layout==='mobile'&&
      css<{}>`
        display: flex;
        align-items: center;
        >img{
          width: 36px;
          height: 36px;
          border-radius: 18px;
          margin-right: 1rem;
        }
        >svg{
          margin-right: 1.5rem;      
        }
        >button:last-child{
          margin-left: 10px;
        }`
    }
    transform: translate(0px,0px);
    transition: transform 0.5s;
    ${props=>props.theme.font.body.regular.t3}
  }
  &[data-selected=true] {
    text-decoration: underline;
    text-underline-offset: 2px;
  }
  &[data-hovered=true]{
    span {
      transform: translate(2px,2px);
    }
  }
`,

IconCell = styled.div`
  ${p=>p.theme.layout==='desktop'?
  css<{}>`
    height: 50px;
    &[data-hovered=true]{
      background-color: #fcf9f3;
      cursor: pointer;
    }
    &[data-selected=true] {
      background-color: #F4EADE;
    }
    &:last-child {
      margin-bottom: 1rem;
    }`:
  css<{}>`
    height: 70px;
    background-color: white;
  `}
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`,

IconRow = styled.div`
  width: 100%;
  height: 50px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
  cursor: pointer;
  &[data-selected=true] {
    background-color: #F4EADE;
  }
  span {
    transform: translate(0px,0px);
    transition: transform 0.5s;
    ${props=>props.theme.font.title.mono.h4}

  }
  &[data-selected=true] {
    text-decoration: underline;
    text-underline-offset: 2px;
  }
  &[data-hovered=true]{
    span {
      transform: translate(2px,2px);
      pointer-events: none;
    }
  }
  ::before{
    content: '';
    position: absolute;
    width: 50px;
    height: 100%;
    right: calc(100% + 16px);
  }
`,

LangCell = styled.div`
  width: 100%;
  height: 80px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #030303;
  ${p=>p.theme.layout==='desktop' && css`
    select, span{
      ${props=>props.theme.font.body.semibold.t4};
      color: white;
    }`}
`,

List = styled.div`
  width: 100%;
  max-height: calc(100vh - 50px);
  position: relative;
  overflow-y: scroll;
  padding-bottom: 1rem;
`,

LogoRow = styled.div`
  width: calc(100% + 2rem);
  margin-left: -2rem;
  padding-left: 2rem;
  height: 58px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
  cursor: pointer;
  >span {
    transform: translate(0px,0px);
    transition: transform 0.5s;
    ${props=>props.theme.font.body.regular.t3}
  }
  &[data-selected=true] {
    text-decoration: underline;
    text-underline-offset: 2px;
  }
`,

CloseButton = styled.div`
  width: 58px;
  height: 58px;
  border-left: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`,

BottomPanel = styled.div`
  width: calc(100% + 2rem);
  height: 58px;
  position: relative;
  bottom: 0px;
  display: flex;
  align-items: center;
  margin-left: -2rem;
  >div:first-child{
    flex: 0 0 80px;
    background-color: black;
    height: 100%;
    position: relative;
    select, span{
      ${props=>props.theme.font.body.semibold.t1};
      color: white;
    }
  }
  >div:last-child{
    padding: 1rem;
    background-color: white;
    ${props=>props.theme.font.body.regular.t4}
  }
`,

ListContainer = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  flex-direction: column;
  position: relative;
`
