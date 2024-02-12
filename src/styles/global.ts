'use client'
import { createGlobalStyle } from 'styled-components'
const GlobalStyles = createGlobalStyle`
  @font-face {
    font-display: swap;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    src: url('/fonts/poppins-v20-latin-300.woff2') format('woff2');
  }
  @font-face {
    font-display: swap;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/poppins-v20-latin-regular.woff2') format('woff2');
  }
  @font-face {
    font-display: swap;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    src: url('/fonts/poppins-v20-latin-600.woff2') format('woff2');
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    --webkit-font-smoothing: antialiased;
    --moz-osx-font-smoothing: grayscale;
    &::before,
    &::after{
      box-sizing: inherit;
    }
  }
  html{
    font-size: 62.5%;//1rem 10px 10/16 = 62.5%
  }
  html,body, #__next{
    height: 100%;
  }
  body{
    font-family: ${props=>props.theme.font.family};
    font-size :${props=>props.theme.font.sizes.medium} ;
    background: ${props=>props.theme.colors.mainBg};
  }
`
export default GlobalStyles
