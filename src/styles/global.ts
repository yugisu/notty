import { createGlobalStyle } from 'styled-components'
import { transparentize } from 'polished'

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;

    color: ${props => props.theme.colors.dark};
    font-family: 'IBM Plex Serif', serif;
    font-size: 16px;

    /* Following conditional helps to avoid blinking */
    color-scheme: ${props => props.theme.currentTheme};
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;

    background-color: ${props => props.theme.colors.light};

    transition: background-color 500ms ease;
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

  a {
    color: ${props => props.theme.colors.link};

    &:active {
      color: ${props => props.theme.colors.linkActive};
    }
  }

  body {
    overflow-y: scroll;

    scrollbar-width: thin;

    &::-webkit-scrollbar {
      width: 0.5rem;
    }

    scrollbar-color: ${props => transparentize(0.8, props.theme.colors.lightGrey)} transparent;

    &::-webkit-scrollbar-thumb {
      background: ${props => transparentize(0.8, props.theme.colors.lightGrey)};

      &:hover {
        background: ${props => transparentize(0.4, props.theme.colors.lightGrey)};
      }
    }
  }
`
