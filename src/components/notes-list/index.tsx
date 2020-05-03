import React from 'react'
import styled from 'styled-components'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { transparentize } from 'polished'

import { NoteThumbnail, NewNoteThumbnail } from '~components/note-thumbnail'

const Container = styled.ul`
  max-height: 100%;

  list-style: none;
  margin: 0;
  padding: 1rem 1rem 2rem 0;

  overflow-x: hidden;
  overflow-y: auto;

  > *:not(:first-child) {
    margin-top: 1rem;
  }

  /* Scrollbar */

  scrollbar-width: thin;
  scrollbar-color: transparent transparent;

  &::-webkit-scrollbar {
    width: 0.35rem;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: transparent;
  }

  &:hover {
    scrollbar-color: ${props => transparentize(0.8, props.theme.colors.lightGrey)} transparent;

    &::-webkit-scrollbar-thumb {
      background: ${props => transparentize(0.8, props.theme.colors.lightGrey)};

      &:hover {
        background: ${props => transparentize(0.4, props.theme.colors.lightGrey)};
      }
    }
  }
`

const ListLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`

export const NotesList = () => {
  const params = useParams<{ noteId?: string }>()

  const notes = useSelector(state => state.notes.keys.map(key => state.notes.items[key]))

  return (
    <Container>
      <li>
        <ListLink to="/new">
          <NewNoteThumbnail />
        </ListLink>
      </li>

      {notes.map(note => (
        <li key={note.id}>
          <ListLink to={`/${note.id}`}>
            <NoteThumbnail note={note} highlighted={params.noteId === note.id} />
          </ListLink>
        </li>
      ))}
    </Container>
  )
}
