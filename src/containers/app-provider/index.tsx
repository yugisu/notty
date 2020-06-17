import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider as StoreProvider } from 'react-redux'

import { store } from '~store'
import { CurrentThemeProvider } from './components/current-theme-provider'

type Props = {
  children: React.ReactNode
}

export const AppProvider = ({ children }: Props) => {
  return (
    <CurrentThemeProvider>
      <BrowserRouter>
        <StoreProvider store={store}>{children}</StoreProvider>
      </BrowserRouter>
    </CurrentThemeProvider>
  )
}
