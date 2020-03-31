import React, { useState, useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Markdown from 'markdown-to-jsx'
import styled from 'styled-components'

import { NoteDataType } from '~types/note'
import { createNote } from '~helpers/notes/create-note'
import { updateNote, addNote, removeNote } from '~store/notes/actions'

import { Textarea } from '~components/textarea'

const Container = styled.div`
  position: relative;
  width: 100%;
  min-width: 20rem;

  background-color: ${props => props.theme.colors.bg};
  border: 1px solid #444;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
`

const Header = styled.div`
  position: sticky;
  top: 0;

  padding: 0.5rem 1rem;
  display: flex;

  background-color: inherit;

  border-bottom: 1px solid;
  border-bottom-color: inherit;
`

const Utilities = styled.div`
  margin-left: auto;

  display: flex;
  flex-wrap: nowrap;
`

const Utility = styled.button`
  padding: 0.15rem 0.25rem;

  color: #444;
  font-size: 0.8em;

  opacity: 0.6;

  background: none;
  border: none;
  cursor: pointer;

  &:hover,
  &:focus {
    opacity: 1;
  }
`

const Field = styled(Textarea)`
  min-height: 10rem;
  background: inherit;

  &:focus {
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  }
`

const PlainInner = styled.div`
  padding: 1rem;
`

type Props = {
  itemId: string
}

export const Note = ({ itemId }: Props) => {
  const history = useHistory()
  const dispatch = useDispatch()

  const isNew = useMemo(() => itemId === 'new', [itemId])
  const note = useSelector(state => (isNew ? null : state.notes.items[itemId]))

  const [isEditing, setIsEditing] = useState(() => isNew)

  const handleUpdates = (data: NoteDataType) => {
    if (isNew) {
      const newNote = createNote(data)

      dispatch(addNote(newNote))
      history.push(newNote.id)
    } else {
      dispatch(updateNote(itemId, data))
    }
  }

  const handleBodyUpdate = (value: string) => handleUpdates({ body: value })

  const toggleEditing = useCallback(() => {
    if (isEditing && !isNew && note?.body) {
      dispatch(updateNote(itemId, { body: note.body.trim() }))
    }

    setIsEditing(v => !v)
  }, [dispatch, isEditing, isNew, itemId, note])

  const handleDelete = () => {
    if (!isNew) {
      dispatch(removeNote(itemId))
    }

    history.push('/')
  }

  return (
    <Container>
      <Header>
        <div></div>
        <Utilities>
          {!isNew && (
            <Utility onClick={toggleEditing}>{isEditing ? 'Stop editing' : 'Edit'}</Utility>
          )}
          <Utility onClick={handleDelete}>{isNew ? 'Cancel' : 'Delete'}</Utility>
        </Utilities>
      </Header>
      {isEditing ? (
        <>
          <Field value={note?.body ?? ''} onChange={handleBodyUpdate} autoFocus />
        </>
      ) : (
        <PlainInner onDoubleClick={toggleEditing}>
          <Markdown children={note?.body ?? ''} />
        </PlainInner>
      )}
    </Container>
  )
}
