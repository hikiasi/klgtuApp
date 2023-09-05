import type { Preview } from "@storybook/react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { withThemeFromJSXProvider } from '@storybook/addon-styling'
import { Theme, lightTheme } from '../src/shared/ui/theme'


const GlobalStyles = createGlobalStyle`
  *, html,
  body {
    box-sizing: border-box;
    margin: 0;
  }
`

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: lightTheme as Theme,
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
    GlobalStyles,// Adds your GlobalStyle component to all stories
  }),
];
