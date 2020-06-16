import { NoteDataType, NoteType } from '~types/note'
import { generateId } from './note-id'

const defaultNoteData: NoteDataType = {
  body: '',
}

export const createNote = (data: Partial<NoteDataType> = {}): NoteType => ({
  ...defaultNoteData,
  ...data,
  id: generateId(),
  updatedAt: Date.now(),
})
