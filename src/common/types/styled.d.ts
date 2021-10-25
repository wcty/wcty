import "styled-components/macro";
import { theme } from '../style/theme'
type Theme = typeof theme

declare module "styled-components/macro" {
  export interface DefaultTheme extends Theme {}
}
