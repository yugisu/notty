import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;

    color: ${props => props.theme.colors.black};
    font-family: Roboto, sans-serif;
    font-size: 16px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    background-color: ${props => props.theme.colors.bg};
    min-height: 100vh;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    &:first-child {
      margin-top: 0;
    }
  }

  body {
    margin: 0;
    padding: 0;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`
