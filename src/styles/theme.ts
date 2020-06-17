import { dark } from './media'

type Colors = 'dark' | 'white' | 'light' | 'grey' | 'lightGrey' | 'primary' | 'danger'

type Theme = {
  currentTheme: 'light' | 'dark'
  colors: Record<Colors, string>
}

export const lightTheme: Theme = {
  currentTheme: 'light',
  colors: {
    dark: '#222',
    white: '#fff',
    light: '#f6f6f6',
    grey: '#999',
    lightGrey: '#bbb',
    primary: '#ff934f',
    danger: 'red',
  },
}

export const darkTheme: Theme = {
  currentTheme: 'dark',
  colors: {
    dark: '#eee',
    white: '#111',
    light: '#282828',
    grey: '#666',
    lightGrey: '#999',
    primary: '#ff934f',
    danger: 'tomato',
  },
}

export const determineTheme = () => (dark.isActive() ? darkTheme : lightTheme)

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
