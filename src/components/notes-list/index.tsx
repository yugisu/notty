import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { isNoteId } from '~helpers/notes/note-id'

import { NoteThumbnail, NewNoteThumbnail } from '~components/note-thumbnail'

import * as S from './styled'

const getCurrentNoteId = (path: string) => {
  const id = path.replace('/', '')
  return isNoteId(id) ? id : null
}

export const NotesList = () => {
  const location = useLocation()

  const notes = useSelector(state => state.notes.keys.map(key => state.notes.items[key]))

  const currentNoteId = getCurrentNoteId(location.pathname)

  return (
    <S.Container>
      <li>
        <S.ListLink to="/new">
          <NewNoteThumbnail />
        </S.ListLink>
      </li>

      {notes.map(note => (
        <li key={note.id}>
          <S.ListLink to={`/${note.id}`}>
            <NoteThumbnail note={note} highlighted={currentNoteId === note.id} />
          </S.ListLink>
        </li>
      ))}
    </S.Container>
  )
}
