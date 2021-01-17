import { createGlobalStyle } from 'styled-components';

interface FontSize {
  xxxs: string;
  xxs: string;
  xs: string;
  sm: string;
  base: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  '4xl': string;
  '5xl': string;
  '6xl': string;
}

interface Breakpoints {
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

interface MediaQueries {
  smallAndUp: string;
  mediumAndUp: string;
  largeAndUp: string;
  xlargeAndUp: string;
}

export const fontSize: FontSize = {
  xxxs: '0.75rem',
  xxs: '1rem',
  xs: '1.2rem',
  sm: '1.5rem',
  base: '1.6rem',
  lg: '1.8rem',
  xl: '2rem',
  '2xl': '2.4rem',
  '3xl': '3rem',
  '4xl': '3.6rem',
  '5xl': '4.8rem',
  '6xl': '6.4rem',
};

export const breakpoints: Breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
};

const mediaQueries: MediaQueries = {
  smallAndUp: `@media screen and (min-width: ${breakpoints.sm})`,
  mediumAndUp: `@media screen and (min-width: ${breakpoints.md})`,
  largeAndUp: `@media screen and (min-width: ${breakpoints.lg})`,
  xlargeAndUp: `@media screen and (min-width: ${breakpoints.xl})`,
};

export const theme = {
  fontSize,
  breakpoints,
  mediaQueries,
};

type ThemeType = typeof theme;

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  html {
  font-size: 62.5%;
  }

  * {
    -webkit-appearance: none;
  }
`;

export default GlobalStyle;
