import { useEffect } from 'react'
import { useSelector } from 'react-redux'

export const NotesCache = () => {
  const notes = useSelector(state => state.notes.items)

  useEffect(() => localStorage.setItem('notes', JSON.stringify(notes)), [notes])

  return null
}
