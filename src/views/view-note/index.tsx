import React from 'react'
import { useParams } from 'react-router-dom'

import { Page } from '~containers/page'
import { Note } from '~containers/note'

export const ViewNote = () => {
  const params = useParams<{ noteId: string }>()

  return (
    <Page>
      <Page.Header />
      <Page.Body>
        <Note itemId={params.noteId} />
      </Page.Body>
    </Page>
  )
}
