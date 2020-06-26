import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { entries, debounce } from 'lodash/fp'

import { isNoteId } from '~helpers/notes/note-id'
import { updateAllNotes } from '~store/notes/actions'
import { getNotes } from '~helpers/notes/get-notes-from-cache'

import { dark } from '~helpers/media'
import { favicons } from '~helpers/favicons'

const cleanUpLocalStorage = () =>
  entries(localStorage)
    .filter(
      ([key, value]) =>
        (isNoteId(key) || key === 'undefined') && ['null', 'undefined', ''].includes(value),
    )
    .forEach(([key]) => localStorage.removeItem(key))

export const useInitializeApp = () => {
  const dispatch = useDispatch()

  useEffect(() => cleanUpLocalStorage(), [])

  useEffect(() => {
    const reactToStorageChanges = debounce(500, () => {
      const notesRecord = getNotes()
      dispatch(updateAllNotes(notesRecord))
    })

    window.addEventListener('storage', reactToStorageChanges)

    return () => window.removeEventListener('storage', reactToStorageChanges)
  }, [dispatch])

  useEffect(() => {
    if (dark.isActive()) {
      const iconLinkElement = document.head.querySelector('link[rel=icon]') as HTMLLinkElement

      if (iconLinkElement) {
        iconLinkElement.href = favicons.dark
      }
    }
  }, [])
}
