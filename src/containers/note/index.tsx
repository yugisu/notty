import React, { useState, useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Markdown from 'markdown-to-jsx'
import styled from 'styled-components'

import { NoteDataType } from '~types/note'
import { createNote } from '~helpers/notes/create-note'
import { updateNote, addNote, removeNote } from '~store/notes/actions'

import { Textarea } from '~components/textarea'

import * as S from './styled'

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
    <S.Container>
      <S.Header>
        <div></div>
        <S.Utilities>
          {!isNew && (
            <S.Utility onClick={toggleEditing}>{isEditing ? 'Stop editing' : 'Edit'}</S.Utility>
          )}
          <S.Utility onClick={handleDelete}>{isNew ? 'Cancel' : 'Delete'}</S.Utility>
        </S.Utilities>
      </S.Header>

      {isEditing ? (
        <S.Field value={note?.body ?? ''} onChange={handleBodyUpdate} autoFocus />
      ) : (
        <S.PlainInner onDoubleClick={toggleEditing}>
          <S.Markdown children={note?.body ?? ''} />
        </S.PlainInner>
      )}
    </S.Container>
  )
}
