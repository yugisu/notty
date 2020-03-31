import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { extractTitleFromNoteBody } from '~helpers/notes/body-to-title'

import { Page } from '~containers/page'

export const NotesList = () => {
  const notes = useSelector(state => state.notes.keys.map(key => state.notes.items[key]))

  return (
    <Page>
      <Page.Header />
      <Page.Body>
        <h1>All notes</h1>
        <ul>
          <li>
            <Link to="/new">
              <span role="img" aria-hidden>
                ➕
              </span>{' '}
              Add a new note
            </Link>
          </li>

          {notes.map(note => (
            <li key={note.id}>
              <Link to={`/${note.id}`}>
                {note.title || extractTitleFromNoteBody(note.body) || note.id}
              </Link>
            </li>
          ))}
        </ul>
      </Page.Body>
    </Page>
  )
}
