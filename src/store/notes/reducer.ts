import { uniq, dissoc } from 'lodash/fp'

import { NoteType } from '~types/note'
import { getNotes } from '~helpers/notes/get-notes-from-cache'

import * as actions from './actions'

type NotesState = {
  items: Record<string, NoteType>
  keys: string[]
}

const getInitialState = (): NotesState => {
  const items = getNotes()
  const keys = Object.values(items)
    .sort((a, b) => b.updatedAt - a.updatedAt)
    .map(n => n.id)

  return {
    items,
    keys,
  }
}

export const notesReducer = (state = getInitialState(), action: actions.NoteAction): NotesState => {
  switch (action.type) {
    case actions.addNote.type:
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.id]: action.payload,
        },
        keys: [action.payload.id, ...state.keys],
      }

    case actions.updateNote.type:
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.id]: {
            ...state.items[action.payload.id],
            ...action.payload.data,
          },
        },
        keys: uniq([action.payload.id, ...state.keys]),
      }

    case actions.removeNote.type:
      return {
        ...state,
        items: dissoc(action.payload.id, state.items),
        keys: state.keys.filter(key => key !== action.payload.id),
      }

    default:
      return state
  }
}
