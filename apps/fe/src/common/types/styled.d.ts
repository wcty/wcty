import 'styled-components';
import { theme } from '@ui/common';
import { CSSProp } from 'styled-components';

type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    layout: 'mobile' | 'desktop';
    isWebView: boolean;
  }
}

declare module 'react' {
  interface Attributes {
    css?: CSSProp<MyTheme>;
  }
}
