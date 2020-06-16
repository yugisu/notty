import React, { useState, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'

import { updateNote, removeNote } from '~store/notes/actions'
import { useOnClickOutside } from '~helpers/hooks/use-on-click-outside'

import { Markdown } from '~components/markdown'
import { DeleteButton } from './components/delete-button'

import * as S from './styled'

type Props = {
  itemId: string
}

export const Note = ({ itemId }: Props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation<{ fromCreated?: boolean }>()
  const fromCreated = Boolean(location.state?.fromCreated)

  const note = useSelector(state => state.notes.items[itemId])

  const [isEditing, setIsEditing] = useState(() => fromCreated)
  const toggleEditing = () => setIsEditing(v => !v)

  const handleBodyUpdate = useCallback((body: string) => dispatch(updateNote(itemId, { body })), [
    dispatch,
    itemId,
  ])

  const handleDelete = useCallback(() => {
    dispatch(removeNote(itemId))
    history.push('/')
  }, [dispatch, history, itemId])

  const handleClickOutside = useCallback(() => isEditing && setIsEditing(false), [isEditing])

  const containerRef = useOnClickOutside<HTMLDivElement>(handleClickOutside)

  useEffect(() => {
    if (note?.body && !isEditing) {
      const trimmedBody = note.body.trim()

      if (note.body !== trimmedBody) {
        dispatch(updateNote(itemId, { body: trimmedBody }))
      }
    }
  }, [dispatch, isEditing, itemId, note])

  useEffect(() => void (!note && history.push('/')), [history, note])

  if (!note) {
    return null
  }

  return (
    <S.Container ref={containerRef}>
      <S.Header>
        <S.Utilities>
          {fromCreated && !note.body ? (
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
        <S.Field value={note.body} onChange={handleBodyUpdate} autoFocus />
      ) : (
        <S.PlainInner onDoubleClick={toggleEditing}>
          <Markdown source={note.body} onSourceChange={handleBodyUpdate} />
        </S.PlainInner>
      )}
    </S.Container>
  )
}
