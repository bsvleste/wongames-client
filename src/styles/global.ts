import { createGlobalStyle } from 'styled-components'
const GlobalStyles = createGlobalStyle`
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
    font-family: var(--font-poppins), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size :${props=>props.theme.font.sizes.medium} ;
    background: ${props=>props.theme.colors.mainBg};
  }
`
export default GlobalStyles
