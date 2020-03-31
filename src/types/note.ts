export type NoteDataType = {
  body?: string
  title?: string
  data?: Record<string, any>
}

export type NoteMetaType = {
  id: string

  updatedAt: number
}

export type NoteType = NoteMetaType & NoteDataType
