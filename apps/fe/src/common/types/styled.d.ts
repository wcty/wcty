import "styled-components";
import { theme } from '@ui/common'
type Theme = typeof theme

declare module "styled-components" {
  export interface DefaultTheme extends Theme {
    layout: 'mobile'|'desktop'
  }
}
