import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { useInitializeApp } from './use-initialize-app'

import { GlobalStyles } from '~styles/global'
import { NotesCache } from '~components/notes-cache'
import { Page } from '~containers/page'
import { NewNote } from '~containers/note/new-note'
import { Dashboard } from '~views/dashboard'
import { ViewNote } from '~views/view-note'

export const App = () => {
  useInitializeApp()

  return (
    <>
      <GlobalStyles />
      <NotesCache />

      <Page>
        <Page.Header />
        <Page.Body>
          <Switch>
            <Route path="/:noteId([A-z0-9]{6})" component={ViewNote} />
            <Route path="/new" component={NewNote} />
            <Route path="/" exact component={Dashboard} />

            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </Page.Body>
      </Page>
    </>
  )
}
