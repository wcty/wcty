import styled, {css} from "styled-components/macro";

export const 
SidepanelWrapper = styled.div`
  top: 0px;
  left: 0px;
  position: absolute;
  display: flex;
  flex-direction: row;
  transition: width 0.5s;
  align-items: stretch;
  overflow: hidden;
  min-height: 100%;
  ${({open}:{open:false|'wide'|'menu'})=>
    open==='menu'? 
    css`
      width: 300px;
      div > div > div.thumb {
        transform: translate(0px,0px);
      }`:
    open==='wide'? 
    css`
      width: 100%;`: 
    css`
      width: 0px;
      `
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
    >img{
      width: 36px;
      height: 36px;
      border-radius: 18px;
      margin-right: 1rem;
    }
    svg{
      margin-right: 1.5rem;      
    }
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
`
