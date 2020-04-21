import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { useInitializeApp } from './use-initialize-app'

import { GlobalStyles } from '~styles/global'
import { ViewNote } from '~views/view-note'
import { NotesCache } from '~components/notes-cache'

export const App = () => {
  useInitializeApp()

  return (
    <>
      <GlobalStyles />
      <NotesCache />

      <Switch>
        <Route path="/:noteId([A-z0-9]{6}|new)" component={ViewNote} />

        <Route render={() => <Redirect to="/new" />} />
      </Switch>
    </>
  )
}
