import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import { theme } from '~styles/theme'

import { App } from '~containers/app'

const ToRender = () => (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
)

const rootNode = document.getElementById('app-root')
ReactDOM.render(<ToRender />, rootNode)
