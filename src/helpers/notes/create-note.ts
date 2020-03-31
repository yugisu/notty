import { NoteDataType, NoteType } from '~types/note'
import { generateId } from './note-id'

export const createNote = (data: NoteDataType): NoteType => ({
  ...data,
  id: generateId(),
  updatedAt: Date.now(),
})
