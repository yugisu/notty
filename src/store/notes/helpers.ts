import { NoteType } from '~types/note'

export const transformNotesRecordToState = (items: Record<string, NoteType>) => {
  const keys = Object.values(items)
    .sort((a, b) => b.updatedAt - a.updatedAt)
    .map(n => n.id)

  return {
    items,
    keys,
  }
}
