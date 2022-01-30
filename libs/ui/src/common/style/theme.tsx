
import { colors } from './colors'
import { buttonTypes, buttonSizes } from './inputs/buttons';
import { font } from './font'
import { css } from './css';

export const theme = {
  id:"T-001",
  name:'main',
  shadow: css`box-shadow: 3px 3px 3px rgba(0,0,0,0.15);`,
  colors,
  buttonTypes,
  buttonSizes,
  font
} 

