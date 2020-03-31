import { css, ThemedCssFunction, DefaultTheme } from 'styled-components'

const desktopMedia = '(min-width: 850px)'
const tabletMedia = '(max-width: 849px)'
const mobileMedia = '(max-width: 575px)'

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

export const desktop = createMediaQuery(desktopMedia)
export const tablet = createMediaQuery(tabletMedia)
export const mobile = createMediaQuery(mobileMedia)
