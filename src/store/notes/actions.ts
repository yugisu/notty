import { createAction } from '@reduxjs/toolkit'

import { NoteDataType, NoteType } from '~types/note'
import { transformNotesRecordToState } from './helpers'

const UPDATE_ALL_NOTES = 'UPDATE_ALL_NOTES'
const ADD_NOTE = 'ADD_NOTE'
const UPDATE_NOTE = 'UPDATE_NOTE'
const REMOVE_NOTE = 'REMOVE_NOTE'

export const updateAllNotes = createAction(
  UPDATE_ALL_NOTES,
  (payload: Record<string, NoteType>) => ({ payload: transformNotesRecordToState(payload) }),
)

export const addNote = createAction(ADD_NOTE, (payload: NoteType) => ({
  payload,
}))

export const updateNote = createAction(UPDATE_NOTE, (id: string, data: NoteDataType) => ({
  payload: {
    id,
    data: {
      ...data,
      updatedAt: Date.now(),
    },
  },
}))

export const removeNote = createAction(REMOVE_NOTE, (id: string) => ({ payload: { id } }))

export type NoteAction = ReturnType<
  typeof updateAllNotes | typeof addNote | typeof updateNote | typeof removeNote
>
