import { useEffect } from 'react'
import { entries } from 'lodash/fp'

import { isNoteId } from '~helpers/notes/note-id'

const cleanUpLocalStorage = () =>
  entries(localStorage)
    .filter(
      ([key, value]) =>
        (isNoteId(key) || key === 'undefined') && ['null', 'undefined', ''].includes(value),
    )
    .forEach(([key]) => localStorage.removeItem(key))

export const useInitializeApp = () => {
  useEffect(() => cleanUpLocalStorage(), [])
}
