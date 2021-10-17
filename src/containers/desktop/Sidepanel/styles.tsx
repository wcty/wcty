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
      width: 330px;
      div.menu {
        width: 280px;
      }`: 
    css`
      width: 50px;
      min-height: 0px;`
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
  width: 250px;
  height: 100%;
  position: absolute;
  right: 0px;
  top: 0px;
  padding-left: 1rem;
  background-color: #F4EADE;
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
`,

UserIconRow = styled.div`
  width: 100%;
  height: 70px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
  padding-right: 2rem;
  cursor: pointer;
  span {
    transform: translate(0px,0px);
    transition: transform 0.5s;
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
  width: 100%;
  height: 50px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &[data-hovered=true]{
    background-color: #fcf9f3;
    cursor: pointer;
  }
  &[data-selected=true] {
    background-color: #F4EADE;
  }
  &:last-child {
    margin-bottom: 1rem;
  }
  /* ::after{
    content: '';
    position: absolute;
    width: 250px;
    height: 100%;
    left: 100%;
  } */
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
