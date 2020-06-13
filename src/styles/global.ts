import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;

    color: ${props => props.theme.colors.dark};
    font-family: 'IBM Plex Serif', serif;
    font-size: 16px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;

    background-color: ${props => props.theme.colors.light};
  }

  h1,
  h2 {
    line-height: 1;
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

  img {
    max-width: 100%;
    height: auto;
  }
`
