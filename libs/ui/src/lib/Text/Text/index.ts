import styled, { css } from "styled-components"

import { theme } from "@ui/common"
import { space, layout, position, SpaceProps, LayoutProps, PositionProps, flexbox, FlexboxProps } from "styled-system"

type colorTypes = keyof typeof theme.colors
const colors:colorTypes[] = Object.keys(theme.colors) as colorTypes[]


export const 
Text = styled.span.attrs(({
  button
}:{
  button?:boolean
})=>(button?{as:'button'}:{}))
<{ semibold?: boolean, customSize?: 't1'|'t2'|'t3'|'t4'|'t5', customColor?: colorTypes, button?: boolean } & SpaceProps & FlexboxProps & LayoutProps & PositionProps >`
  ${({
    semibold,
    customSize='t4',
    ...p
  })=>semibold?
    p.theme.font.body.semibold[customSize]:
    p.theme.font.body.regular[customSize] }
  text-align: center; 
  ${p=>p.customColor && (
    colors.includes(p.customColor) ?
      css`color: ${p.theme.colors[p.customColor]};`:
      css`color: ${p.customColor};`
  )}
  ${p=>p.button && css`
    cursor: pointer;
    border: none;
    background: none;
    outline: none;
  `}
  >svg{
    margin-right: 8px;
  }
  ${space}
  ${layout}
  ${position}
  ${flexbox}
`,

Divider = styled.div<{ customColor?: colorTypes } & SpaceProps & FlexboxProps & LayoutProps & PositionProps>`
  width: 100%;
  height: 1px;
  background: rgba(0,0,0,0.1);
  margin-top: 2rem;
  margin-bottom: 1rem;
  ${p=>p.customColor && (
    colors.includes(p.customColor) ?
      css`background: ${p.theme.colors[p.customColor]};`:
      css`background: ${p.customColor};`
  )}
  ${space}
  ${layout}
  ${position}
  ${flexbox}
`