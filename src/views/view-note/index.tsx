import React from 'react'
import { useParams } from 'react-router-dom'

import { Note } from '~containers/note'

export const ViewNote = () => {
  const params = useParams<{ noteId: string }>()

  return <Note itemId={params.noteId} />
}
