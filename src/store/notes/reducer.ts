import { dissoc, assoc } from 'lodash/fp'

import { NoteType } from '~types/note'
import { getNotes } from '~helpers/notes/get-notes-from-cache'
import { transformNotesRecordToState } from './helpers'

import * as actions from './actions'

type NotesState = {
  items: Record<string, NoteType>
  keys: string[]
}

const getInitialState = (): NotesState => {
  const notesRecord = getNotes()

  return transformNotesRecordToState(notesRecord)
}

export const notesReducer = (state = getInitialState(), action: actions.NoteAction): NotesState => {
  switch (action.type) {
    case actions.updateAllNotes.type:
      return {
        ...state,
        ...action.payload,
      }

    case actions.addNote.type:
      return {
        ...state,
        items: assoc(action.payload.id, action.payload, state.items),
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
        keys: [action.payload.id, ...state.keys.filter(key => key !== action.payload.id)],
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
