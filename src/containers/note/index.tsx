import React, { useState, useCallback, useMemo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { isNil } from 'lodash/fp'

import { NoteDataType } from '~types/note'
import { createNote } from '~helpers/notes/create-note'
import { updateNote, addNote, removeNote } from '~store/notes/actions'
import { useOnClickOutside } from '~helpers/hooks/use-on-click-outside'

import { DeleteButton } from './components/delete-button'

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

  const toggleEditing = useCallback(() => setIsEditing(v => !v), [])

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

  const handleDelete = () => {
    if (!isNew) {
      dispatch(removeNote(itemId))
    }

    history.push('/')
  }

  const handleClickOutside = useCallback(() => void (!isNew && isEditing && setIsEditing(false)), [
    isEditing,
    isNew,
  ])

  const containerRef = useOnClickOutside<HTMLDivElement>(handleClickOutside)

  useEffect(() => {
    if (note && !isNil(note.body)) {
      const trimmedBody = note.body.trim()

      if (!isEditing && !isNew && note.body !== trimmedBody) {
        dispatch(updateNote(itemId, { body: trimmedBody }))
      }
    }
  }, [dispatch, isEditing, isNew, itemId, note])

  return (
    <S.Container ref={containerRef}>
      <S.Header>
        <div></div>
        <S.Utilities>
          {isNew ? (
            <S.Utility onClick={handleDelete}>Cancel</S.Utility>
          ) : (
            <>
              <S.Utility onClick={toggleEditing}>{isEditing ? 'Stop editing' : 'Edit'}</S.Utility>
              <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
            </>
          )}
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
