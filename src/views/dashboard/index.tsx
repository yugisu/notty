import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

export const Dashboard = () => {
  const history = useHistory()
  const lastNoteId = useSelector(state => state.notes.keys[0])

  useEffect(() => {
    history.push(`/${lastNoteId ?? 'new'}`)
  }, [history, lastNoteId])

  return null
}
