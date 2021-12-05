import { ReactElement } from 'react'
import styled, { css } from "styled-components"

export const 
FormControl = styled.form`
  width: 100%;
  height: 100%;
  margin-top: 2rem;
  >h2{
    display: flex;
    margin: 5rem 0rem;
    >button:only-child {
      margin-left: 0rem;
    }
  }
  ${p=>p.theme.layout==='mobile'? 
    css`
      padding: 2rem 0rem;
      background-color: ${props=>props.theme.colors.primary};
    `:
    css`
      padding-top: 1rem;
    `
  }
`,

TextField = styled.input`
  outline: none;
  border: 1px solid rgba(0,0,0,0.3);
  background: rgba(255,255,255,0.6);
  min-height: 3rem;
  width: 100%;
  -webkit-box-shadow: 0 0 0 30px rgba(0,0,0,0) inset !important;
  padding-left: 1rem;
`,

Label = styled.label`
  display: block;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
`,

ButtonGroup = styled.div`
  margin-top: 0.25rem;
  width: 100%;
  display: flex;
  &:first-child{
    margin-top: 1.5rem;
  }
  button{
    border: 1px solid rgba(0,0,0,0.3);
    outline: none;
    border-radius: none;
    min-height: 3rem;
    min-width: 8rem;
    flex: 1 1 50%;
    background: none;
    margin: 0.5rem 0.25rem;
    cursor: pointer;
    position: relative;
    span {
      transform: translate(0px,0px);
      transition: transform 0.5s;
      position: absolute;
      left: 0%;
      right:0%;
      top:0.8rem;
    }
    :hover{
      background:rgba(0,0,0,0.02);
      span {
        transform: translate(2px,2px);
      }
    }
    &:first-child{
      margin: 0.5rem 0.5rem 0.5rem 0rem;
    }
    &:last-child{
      margin: 0.5rem 0rem 0.5rem 0.5rem;
    }
    &:only-child{
      margin:0.5rem 0rem;
    }
  }
`