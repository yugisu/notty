import { NoteType } from '~types/note'

export const getNotes = () => {
  let notes: Record<string, NoteType> = {}

  try {
    const notesJson = localStorage.getItem('notes')

    if (notesJson) {
      notes = JSON.parse(notesJson)
    }
  } catch (error) {}

  return notes
}
