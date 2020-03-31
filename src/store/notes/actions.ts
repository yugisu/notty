import { createAction } from '@reduxjs/toolkit'

import { NoteDataType, NoteType } from '~types/note'

const ADD_NOTE = 'ADD_NOTE'
const UPDATE_NOTE = 'UPDATE_NOTE'
const REMOVE_NOTE = 'REMOVE_NOTE'

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

export type NoteAction = ReturnType<typeof addNote | typeof updateNote | typeof removeNote>
