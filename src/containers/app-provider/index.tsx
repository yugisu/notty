import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Provider as StoreProvider } from 'react-redux'

import { store } from '~store'
import { determineTheme } from '~styles/theme'

type Props = {
  children: React.ReactNode
}

export const AppProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState(() => determineTheme())

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <StoreProvider store={store}>{children}</StoreProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
