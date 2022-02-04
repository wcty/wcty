import styled, { css } from "styled-components"

import { theme } from "@ui/common"
import { space, layout, position, SpaceProps, LayoutProps, PositionProps, flexbox, FlexboxProps } from "styled-system"

type colorTypes = keyof typeof theme.colors
const colors:colorTypes[] = Object.keys(theme.colors) as colorTypes[]

type TitleTypes = 'h1'|'h2'|'h3'|'h4'|'h5'

export const 
Title = styled.span.attrs((p:{h:TitleTypes})=>({
  as: p.h
}))<{bold?:boolean, h?:TitleTypes, customColor?: colorTypes } & SpaceProps & FlexboxProps & LayoutProps & PositionProps >`
  ${({ bold, h='h4', ...p })=>bold?
    p.theme.font.title.monobold[h]:
    p.theme.font.title.mono[h] }
  text-align: center; 
  ${p=>p.customColor && (
    colors.includes(p.customColor) ?
      css`color: ${p.theme.colors[p.customColor]};`:
      css`color: ${p.customColor};`
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