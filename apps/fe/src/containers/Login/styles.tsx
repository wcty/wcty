import { ReactElement } from 'react'
import styled, { css } from "styled-components"
import { flexbox, FlexProps, layout, LayoutProps, position, PositionProps, space, SpaceProps } from 'styled-system';

export const 
FormControl = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;
`,

Header = styled.h3`
  margin-top: 44px;
  text-align: center;
  margin-bottom: 44px;
`,

TextField = styled.input<PositionProps&LayoutProps&SpaceProps&FlexProps>`
  outline: none;
  border: 1px solid rgba(0,0,0,0.3);
  background: rgba(255,255,255,0.6);
  min-height: 3rem;
  width: 100%;
  -webkit-box-shadow: 0 0 0 30px rgba(0,0,0,0) inset !important;
  padding-left: 1rem;
  ${position}
  ${layout}
  ${space}
  ${flexbox}
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
`,

Divider = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(0,0,0,0.1);
  margin-top: 2rem;
  margin-bottom: 1rem;
`