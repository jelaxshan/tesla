import { createGlobalStyle } from 'styled-components';
import iCielMedium from '../fonts/iCiel-Medium.ttf';

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

interface Colors {
  darkGrey: string;
  white: string;
  lightGrey: string;
  lightBlack: string;
  heading: string;
  black: string;
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

export const colors: Colors = {
  darkGrey: '#171a20cc',
  white: '#fff',
  lightGrey: '#ffffff80',
  lightBlack: '#5c5e62',
  heading: '#393c41',
  black: '#171a20',
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
  colors,
} as const;

type ThemeType = typeof theme;

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`

  @font-face {
    font-family: iCielMedium;
    src: url(${iCielMedium}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: iCielMedium;
    color: #393c41;
  }

  * {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export default GlobalStyle;
