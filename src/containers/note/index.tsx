import React, { useState, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation, Redirect } from 'react-router-dom'

import { updateNote, removeNote } from '~store/notes/actions'
import { useOnClickOutside } from '~helpers/hooks/use-on-click-outside'

import { Markdown } from '~components/markdown'
import { DeleteButton } from './components/delete-button'
import { NoteEditView } from './edit-view'

import * as S from './styled'

type Props = {
  itemId: string
}

export const Note = ({ itemId }: Props) => {
  const history = useHistory()
  const location = useLocation<{ fromCreated?: boolean }>()
  const fromCreated = Boolean(location.state?.fromCreated)

  const dispatch = useDispatch()
  const note = useSelector(state => state.notes.items[itemId])

  const [isEditing, setIsEditing] = useState(() => fromCreated)

  const containerRef = useOnClickOutside<HTMLDivElement>(useCallback(() => setIsEditing(false), []))

  const handleBodyUpdate = useCallback((body: string) => dispatch(updateNote(itemId, { body })), [
    dispatch,
    itemId,
  ])

  const handleDelete = useCallback(() => {
    dispatch(removeNote(itemId))
    history.push('/')
  }, [dispatch, history, itemId])

  useEffect(() => {
    if (note?.body && !isEditing) {
      const trimmedBody = note.body.trim()

      if (note.body !== trimmedBody) {
        handleBodyUpdate(trimmedBody)
      }
    }
  }, [handleBodyUpdate, isEditing, note])

  if (!note) {
    return <Redirect to="/" />
  }

  return (
    <S.Container ref={containerRef}>
      <S.Header>
        <S.Utilities>
          {fromCreated && !note.body ? (
            <S.Utility onClick={handleDelete}>Cancel</S.Utility>
          ) : (
            <>
              <S.Utility onClick={() => setIsEditing(v => !v)}>
                {isEditing ? 'Stop editing' : 'Edit'}
              </S.Utility>
              <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
            </>
          )}
        </S.Utilities>
      </S.Header>

      {isEditing ? (
        <NoteEditView note={note} onChange={handleBodyUpdate} />
      ) : (
        <S.PlainInner onDoubleClick={() => setIsEditing(true)}>
          <Markdown source={note.body} onSourceChange={handleBodyUpdate} />
        </S.PlainInner>
      )}
    </S.Container>
  )
}
