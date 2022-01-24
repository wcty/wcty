import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { ThemeProvider } from "styled-components";
import { getWindowDimensions, theme } from "../src/common";

const { width } = getWindowDimensions();
const layout = (width<960)? 'mobile': 'desktop'
const themes = [{...theme, layout}];

addDecorator(withThemesProvider(themes), ThemeProvider);
