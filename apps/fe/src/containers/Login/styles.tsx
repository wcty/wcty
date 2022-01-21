import { ReactElement } from 'react'
import styled, { css } from "styled-components"

export const 
FormControl = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`,

Header = styled.h3`
  margin-top: 44px;
  text-align: center;
`,

Text = styled.h3<{semibold?:boolean, mt?:string}>`
  ${p=>p.semibold?
    p.theme.font.body.semibold.t4:
    p.theme.font.body.regular.t4 }
  text-align: center; 
  ${p=>p.mt && css`margin-top: ${p.mt};`}
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

Button = styled.button`
  margin-top: 1rem;
  border: 1px solid rgba(0,0,0,1);
  outline: none;
  border-radius: 3px;
  height: 40px;
  /* flex: 1 1 100%; */
  background: none;
  cursor: pointer;
  position: relative;
  >svg{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 1rem;
  }
`