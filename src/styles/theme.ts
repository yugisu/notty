export const theme = {
  colors: {
    black: '#222',
    white: '#fff',
    bg: '#f6f6f6',
  },
}

type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
