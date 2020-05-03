export type NoteDataType = {
  body: string
}

export type NoteMetaType = {
  id: string

  updatedAt: number
}

export type NoteType = NoteMetaType & NoteDataType
