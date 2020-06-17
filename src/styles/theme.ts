type Colors =
  | 'dark'
  | 'white'
  | 'light'
  | 'grey'
  | 'lightGrey'
  | 'primary'
  | 'danger'
  | 'link'
  | 'linkActive'

type Theme = {
  currentTheme: 'light' | 'dark'
  colors: Record<Colors, string>
}

const lightTheme: Theme = {
  currentTheme: 'light',
  colors: {
    dark: '#222',
    white: '#fff',
    light: '#f6f6f6',
    grey: '#999',
    lightGrey: '#bbb',
    primary: '#ff934f',
    danger: 'red',
    link: '#3a3af0',
    linkActive: '#fd3232',
  },
}

const darkTheme: Theme = {
  currentTheme: 'dark',
  colors: {
    dark: '#eee',
    white: '#111',
    light: '#282828',
    grey: '#666',
    lightGrey: '#999',
    primary: '#ff934f',
    danger: 'tomato',
    link: '#9f9fff',
    linkActive: '#ff8181',
  },
}

export const themes = {
  light: lightTheme,
  dark: darkTheme,
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
