import { css } from "styled-components"

export type ElementProps = {
  mt?: string,
  mb?: string,
  ml?: string,
  mr?: string,
  m?: string,
  p?: string,
  pt?: string,
  pb?: string,
  pl?: string,
  pr?: string,
  w?: string,
  h?: string,
  position?: string,
  top?: string,
  bottom?: string,
  left?: string,
  right?: string,
  display?: string,
  flex?: string,
  fd?: string,
  jc?: string,
  ai?: string,
}

export const ElementArgs = css<ElementProps>`
  ${({ mt }) => mt && `margin-top: ${mt};`}
  ${({ mb }) => mb && `margin-bottom: ${mb};`}
  ${({ ml }) => ml && `margin-left: ${ml};`}
  ${({ mr }) => mr && `margin-right: ${mr};`}
  ${({ m }) => m && `margin: ${m};`}
  ${({ p }) => p && `padding: ${p};`}
  ${({ pt }) => pt && `padding-top: ${pt};`}
  ${({ pb }) => pb && `padding-bottom: ${pb};`}
  ${({ pl }) => pl && `padding-left: ${pl};`}
  ${({ pr }) => pr && `padding-right: ${pr};`}
  ${({ w }) => w && `width: ${w};`}
  ${({ h }) => h && `height: ${h};`}
  ${({ position }) => position && `position: ${position};`}
  ${({ top }) => top && `top: ${top};`}
  ${({ bottom }) => bottom && `bottom: ${bottom};`}
  ${({ left }) => left && `left: ${left};`}
  ${({ right }) => right && `left: ${right};`}
  ${({ display }) => display && `display: ${display};`}
  ${({ flex }) => flex && `flex: ${flex};`}
  ${({ fd }) => fd && `flex-direction: ${fd};`}
  ${({ jc }) => jc && `justify-content: ${jc};`}
  ${({ ai }) => ai && `align-items: ${ai};`}
`