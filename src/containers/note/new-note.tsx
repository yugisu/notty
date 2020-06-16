import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { createNote } from '~helpers/notes/create-note'
import { addNote } from '~store/notes/actions'

export const NewNote = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    const newNote = createNote()

    dispatch(addNote(newNote))
    history.push(newNote.id, { fromCreated: true })
  }, [dispatch, history])

  return null
}
