import styled, { css } from 'styled-components'

export const 
FieldWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  transition: transform 0.2s;
  transform: translate(0px,0px);
  >label:nth-child(2){
    position: absolute;
    top:0px;
    left:0px;
    height: 100%;
    width: 100%;
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
    right:5px;
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
      align-self: flex-start;
      margin-top: 1rem;
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

TextInput = styled.input`
  height: 100%;
  width: 100%;
  padding: 1rem 2.5rem 1rem 1.5rem;
  background-color: white;
  border-radius: 3px 3px 3px 3px;
  border: none;
  transition: border-radius 0.2s;
  outline: none;
  border: 1px solid ${p=>p.theme.colors.line};
  :hover{
    background-color: #F7F9FB;
    border: 1px solid ${p=>p.theme.colors.secondary};
  }
  &:focus {
    border: 1px solid ${p=>p.theme.colors.secondary};
    color: ${p=>p.theme.colors.secondary};
    :hover{
      background-color: #ffffff;
    }
  }
`,

TextAreaInput = styled.textarea`
  height: 100%;
  width: 100%;
  padding: 1rem 2.5rem 1rem 1.5rem;
  background-color: white;
  border-radius: 3px 3px 3px 3px;
  border: none;
  transition: border-radius 0.2s;
  outline: none;
  border: 1px solid ${p=>p.theme.colors.line};
  :hover{
    background-color: #F7F9FB;
    border: 1px solid ${p=>p.theme.colors.secondary};
  }
  &:focus {
    border: 1px solid ${p=>p.theme.colors.secondary};
    color: ${p=>p.theme.colors.secondary};
    :hover{
      background-color: #ffffff;
    }
  }
`