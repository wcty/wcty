
import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { ThemeProvider } from "styled-components/macro";
import {theme} from "../src/common/style"

export const parameters = {
  backgrounds: {
    default: 'weCity',
    values: [
      {
        name: 'weCity',
        value: '#F4EADE',
      },
      {
        name: 'white',
        value: '#fff',
      },
    ],
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  
}


const themes = [theme];
addDecorator(withThemesProvider(themes), ThemeProvider);