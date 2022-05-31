import styled, { css } from "styled-components"

import { theme } from "@ui/common"
import { space, layout, position, SpaceProps, LayoutProps, PositionProps, flexbox, FlexboxProps } from "styled-system"

type colorTypes = keyof typeof theme.colors
const colors:colorTypes[] = Object.keys(theme.colors) as colorTypes[]

type TitleTypes = 'h1'|'h2'|'h3'|'h4'|'h5'

export const 
Title = styled.span.attrs((p:{s:TitleTypes})=>({
  as: p.s
}))<{bold?:boolean, s?:TitleTypes, c?: colorTypes } & SpaceProps & FlexboxProps & LayoutProps & PositionProps >`
  ${({ bold, s='h4', ...p })=>bold?
    p.theme.font.title.monobold[s]:
    p.theme.font.title.mono[s] }
  text-align: center; 
  ${p=>p.c && (
    colors.includes(p.c) ?
      css`color: ${p.theme.colors[p.c]};`:
      css`color: ${p.c};`
  )}
  display: flex;
  align-items: center;
  >svg{
    margin-right: 8px;
  }
  ${space}
  ${layout}
  ${position}
  ${flexbox}
`