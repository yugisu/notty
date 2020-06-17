import React from 'react'
import ReactDOM from 'react-dom'

import { App } from '~containers/app'
import { AppProvider } from '~containers/app-provider'

const ToRender = () => (
  <AppProvider>
    <App />
  </AppProvider>
)

const rootNode = document.getElementById('root')
ReactDOM.render(<ToRender />, rootNode)
