import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Provider as StoreProvider } from 'react-redux'

import { store } from '~store'
import { theme } from '~styles/theme'

import { App } from '~containers/app'

const ToRender = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <StoreProvider store={store}>
        <App />
      </StoreProvider>
    </BrowserRouter>
  </ThemeProvider>
)

const rootNode = document.getElementById('app-root')
ReactDOM.render(<ToRender />, rootNode)
