import React, { useContext } from 'react'
import { ThemeProvider as SCThemeProvider } from 'styled-components'

import { themes } from '~styles/theme'
import { dark } from '~helpers/media'
import { useLocalStorage } from '~helpers/hooks/use-local-storage'

type ThemeContextType = {
  currentTheme: keyof typeof themes
  setCurrentTheme: (newTheme: keyof typeof themes) => void
}

export const ThemeContext = React.createContext<ThemeContextType>({
  currentTheme: 'light',
  setCurrentTheme: () => null,
})

type Props = {
  children: React.ReactNode
}

export const CurrentThemeProvider = ({ children }: Props) => {
  const [currentTheme, setCurrentTheme] = useLocalStorage<'light' | 'dark'>(
    'currentTheme',
    dark.isActive() ? 'dark' : 'light',
  )

  return (
    <SCThemeProvider theme={themes[currentTheme]}>
      <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
        {children}
      </ThemeContext.Provider>
    </SCThemeProvider>
  )
}

export const useCurrentTheme = () => useContext(ThemeContext)
