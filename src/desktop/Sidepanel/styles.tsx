import styled from "styled-components/macro";

export const 
Sidepanel = styled.div`
  top: 0px;
  left: 0px;
  width: 65px;
  min-height: 0px;
  position: absolute;
  display: flex;
  flex-direction: row;
  transition: min-height 0.5s, width 0.5s;
  align-items: stretch;
  overflow: hidden;
  &[data-open=true]:hover, &[data-open=true][data-active=true]{
    min-height: 100%;
    width: 300px;
    div > div > div.thumb {
      transform: translate(0px,0px);
    }
    div.menu {
      margin-right: 0px;
    }
  }
  &[data-open=true][data-active=true]{
    min-height: 100%;
    width: 345px;
    div.menu {
      width: 295px;
    }
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
  margin-right: 15px;
  transition: margin-right 0.5s, width 0.5s;
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
  /* ::after{
    content: '';
    position: absolute;
    width: 250px;
    height: 100%;
    left: 100%;
  } */
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
`,

ListItem = styled.div`
  cursor: pointer;
  width: 100%;
  min-height: 50px;
  display: flex;
  padding: 0px 10px;
  align-items: center;
  img {
    border-radius: 3px;
    object-fit: cover;
    width: 30px;
    height: 30px;
  }
  div{
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    margin-left: 1rem;
    span {
      transform: translate(0px,0px);
      transition: transform 0.5s;
    }
  }
  :hover{
    background-color: #F0F4F8;
    div > span {
      transform: translate(2px,2px);
    }
  }
  span.address{
    color: #5f5f5f;
  }
`
