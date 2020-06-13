export const theme = {
  colors: {
    dark: '#222',
    white: '#fff',
    light: '#f6f6f6',
    grey: '#999',
    lightGrey: '#bbb',
    primary: '#ff934f',
  },
}

type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
