import styled, { css } from "styled-components"

import { theme } from "@ui/common"
import { space, layout, position, SpaceProps, LayoutProps, PositionProps } from "styled-system"

type colorTypes = keyof typeof theme.colors
const colors:colorTypes[] = Object.keys(theme.colors) as colorTypes[]


export const 
Text = styled.span<{semibold?:boolean, customColor?: colorTypes } & SpaceProps & LayoutProps & PositionProps >`
  ${p=>p.semibold?
    p.theme.font.body.semibold.t4:
    p.theme.font.body.regular.t4 }
  text-align: center; 
  ${p=>p.customColor && (
    colors.includes(p.customColor) ?
      css`color: ${p.theme.colors[p.customColor]};`:
      css`color: ${p.customColor};`
  )}
  >svg{
    margin-right: 8px;
  }
  ${space}
  ${layout}
  ${position}
`,

Divider = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(0,0,0,0.1);
  margin-top: 2rem;
  margin-bottom: 1rem;
`