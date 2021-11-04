import styled, {css as css_, ThemedCssFunction} from "styled-components/macro";

import {colors} from './colors'
import {buttonTypes, buttonSizes} from './inputs/buttons';
import {font} from './font'

const css = css_ as ThemedCssFunction<{}>

export const theme = {
  id:"T-001",
  name:'main',
  shadow: css`box-shadow: 3px 3px 3px rgba(0,0,0,0.15);`,
  colors,
  buttonTypes,
  buttonSizes,
  font
} 

