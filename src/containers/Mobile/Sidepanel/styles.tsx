import styled, {css} from "styled-components/macro";

export const 
SidepanelWrapper = styled.div`
  top: 0px;
  left: 0px;
  position: absolute;
  display: flex;
  flex-direction: row;
  transition: min-height 0.5s, width 0.5s;
  align-items: stretch;
  overflow: hidden;
  ${({open}:{open:false|'wide'|'menu'})=>
    open==='menu'? 
    css`
      min-height: 100%;
      width: 300px;
      div > div > div.thumb {
        transform: translate(0px,0px);
      }`:
    open==='wide'? 
    css`
      min-height: 100%;
      width: 100%;`: 
    css`
      width: 50px;
      min-height: 0px;`
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

Menu = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  right: 0px;
  top: 0px;
  padding-left: 2rem;
  background-color: ${p=>p.theme.colors.primary};
  transition: width 0.5s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  &[data-hovered=true]{
    span {
      transform: translate(2px,2px);
    }
  }
`,

UserIconRow = styled.div`
  width: 100%;
  height: 70px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
  cursor: pointer;
  >span {
    display: flex;
    align-items: center;
    >button:last-child{
      margin-left: 10px;
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
`,

List = styled.div`
  width: 100%;
  max-height: calc(100vh - 50px);
  position: relative;
  overflow: scroll;
  padding-bottom: 1rem;
`
