import styled, { css } from 'styled-components'

export const 
Wrapper = styled.div`
  position: absolute;
  top: 2rem;
  ${p=>p.theme.layout==='desktop'?
  css<{}>`
    right: 2.5rem;
  `:
  css<{}>`
    right: 18px;
    left: 18px;
  `}
  height: 29px;
  display: flex;
`,

Fab = styled.button`
  ${p=>p.theme.layout==='mobile'?
  css<{}>`
    &:first-child{
      margin-right: 18px;
    }
    &:last-child{
      margin-left: 18px;
    }
    &:only-child{
      margin-left: 0px;
      margin-right: 18px;
    }
  `:
  css<{}>`
    height: 100%;
  `}
  width: 29px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: white;
  transition: background-color 0.2s;
  >svg{
    transform: translate(0px,0px);
    transition: transform 0.5s;
  }
  :hover {
    >svg{
      transform: translate(2px,2px);
    }
    background-color: #fcf9f3; //#F4EADE;
  }
  border-radius: 3px;
  border: none;
  box-shadow: 3px 3px 3px rgba(0,0,0,0.1);
`,

SearchWrapper = styled.div`
  position: relative;
  ${p=>p.theme.layout==='mobile'?
  css<{}>`
    flex: 1 1 auto;
  `:
  css<{}>`
    margin-right: 2rem;
    width: calc(280px + 2rem);
  `}
  :focus-within {
    >div:first-child{      
      border-radius: 3px 3px 0px 0px;
      box-shadow: 3px 3px 3px rgba(0,0,0,0.1);
    }
    >div:nth-child(2){
      transform: translate(0px,29px);
      input{
        border-radius: 0px 0px 3px 3px;
      }
    }
  }
  :not(:focus-within){
    >div:nth-child(3){
      min-height: 0px;
      max-height: 0px;
      top: calc(29px + 8px);
      opacity: 0;
    }
  }
`,

ButtonWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  transition: border-radius 0.2s, box-shadow 0.2s;
  transform: translate(0px,0px);
  background-color: white;
  border-radius: 3px 3px 3px 3px;
  box-shadow: 3px 3px 3px rgba(0,0,0,0.0);
  display: flex;
  overflow: hidden;
  border-bottom: 0.5px solid black;
  >button{
    border: none;
    outline: none;
    flex: 1 1 auto;
    height: 100%;
    background-color: white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0.5rem;
    cursor: pointer;
    transition: color 0.5s;
    >svg{
      margin-right: 0.5rem;
      height: 18px;
      >path{
        transition: fill 0.5s;
        fill: #000000;
      }
    }
    >svg, >span{
      transition: transform 0.5s;
      transform: translate(0px,0px);
    }
    &:first-child{
      border-right: 1px solid black;
    }
    &.selected{
      background-color: #F7F9FB;
      color:#174AFF;
      /* font-weight: bolder; */
      >svg{
        >path{
          fill: #174AFF;
        }
      }
    }
    :hover{
      >svg, >span{
        transform: translate(2px,2px);
      }
    }
  }
`,


FieldWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  transition: transform 0.2s;
  transform: translate(0px,0px);
  >div:nth-child(2){
    position: absolute;
    top:0px;
    left:0px;
    height: 100%;
    width: 2rem;
    display: flex;
    align-items: center;
    pointer-events: none;
    >svg{
      margin-left: 0.5rem;
    }
  }
  >div:last-child{
    position: absolute;
    top:0px;
    right:0px;
    height: 100%;
    width: 29px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px;
    display: flex;
    >button{
      width: 16px;
      height: 16px;
      background: none;
      outline: none;
      border: none;
      border-radius: 8px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      >svg{
        margin: 0;
        position: absolute;
        left: 0px;
        circle{
          transition: fill 0.2s;
        }
        :hover{
          circle {
            fill: #e0e8f0;
          } 
        }
        :active{
          circle {
            fill: #b8c6d4;
          } 
        }
      }
    }
  }
`,

SearchInput = styled.input`
  height: 100%;
  width: 100%;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  background-color: white;
  border-radius: 3px 3px 3px 3px;
  border: none;
  box-shadow: 3px 3px 3px rgba(0,0,0,0.1);
  transition: box-shadow 0.5s, border-radius 0.2s;
  outline: none;
  :hover{
    background-color: #F7F9FB;
  }
  &:focus {
    :hover{
      background-color: #ffffff;
    }
    box-shadow: 3px 3px 3px rgba(23, 74, 255,0.3);
  }
`,

SearchResults = styled.button`
  width: 100%;
  background-color: white;
  border: none;
  padding: 0;
  position: absolute;
  top: calc(58px + 8px);
  min-height: 0px;
  max-height: 0px;
  opacity: 0;
  overflow: hidden;
  transition: min-height 0.5s cubic-bezier(0.075, 0.82, 0.165, 1),
    max-height 0.5s cubic-bezier(0.075, 0.82, 0.165, 1),
    opacity 0.3s cubic-bezier(0.075, 0.82, 0.165, 1),
    top 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  box-shadow: 3px 3px 3px rgba(0,0,0,0.1);
  border-radius: 3px;
  &[data-active=true]{
    min-height: 120px;
    max-height: 300px;
    opacity: 1;
  }
  >div{
    height: 5rem;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem;
  }
`