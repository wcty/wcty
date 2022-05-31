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
<{ semibold?: boolean, s?: 't1'|'t2'|'t3'|'t4'|'t5', c?: colorTypes, button?: boolean } & SpaceProps & FlexboxProps & LayoutProps & PositionProps >`
  ${({
    semibold,
    s='t4',
    ...p
  })=>semibold?
    p.theme.font.body.semibold[s]:
    p.theme.font.body.regular[s] }
  /* text-align: center;  */
  ${p=>p.c && (
    colors.includes(p.c) ?
      css`color: ${p.theme.colors[p.c]};`:
      css`color: ${p.c};`
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

Divider = styled.div<{ c?: colorTypes } & SpaceProps & FlexboxProps & LayoutProps & PositionProps>`
  width: 100%;
  height: 1px;
  background: rgba(0,0,0,0.1);
  margin-top: 2rem;
  margin-bottom: 1rem;
  ${p=>p.c && (
    colors.includes(p.c) ?
      css`background: ${p.theme.colors[p.c]};`:
      css`background: ${p.c};`
  )}
  ${space}
  ${layout}
  ${position}
  ${flexbox}
`