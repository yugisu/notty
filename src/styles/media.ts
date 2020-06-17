import { css, ThemedCssFunction, DefaultTheme } from 'styled-components'

const darkMedia = '(prefers-color-scheme: dark)'

type MediaQuery = {
  query: string
  css: ThemedCssFunction<DefaultTheme>
  isActive: () => boolean
}

const createMediaQuery = (query: string): MediaQuery => ({
  query,
  css: (...args: Parameters<typeof css>) => css`
    ${`@media screen and ${query} {
      ${css(...args)}
    }`}
  `,
  isActive: () => window.matchMedia(query).matches,
})

export const dark = createMediaQuery(darkMedia)
