import React from 'react'

import { Page } from '~containers/page'
import { NotesList } from '~components/notes-list'

export const Dashboard = () => {
  return (
    <Page>
      <Page.Header />
      <Page.Body>
        <NotesList />
      </Page.Body>
    </Page>
  )
}
