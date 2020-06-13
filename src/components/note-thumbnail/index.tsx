import React from 'react'
import { omit } from 'lodash/fp'

import { NoteType } from '~types/note'
import { extractTitleFromNoteBody } from '~helpers/notes/body-to-title'

import * as S from './styled'

type Props = {
  note: NoteType
  highlighted?: boolean
}

export const NoteThumbnail = ({ note, highlighted = false }: Props) => {
  return (
    <S.Container>
      <S.NoteSnapshot
        role="img"
        children={note.body}
        options={{
          overrides: {
            a: {
              component: S.LinkInPreview,
              props: { as: 'span' },
            },
          },
          createElement(type, props, children) {
            if (typeof type === 'string') {
              const isFocusable = ['input', 'textarea', 'button', 'a'].includes(type)

              if (isFocusable) {
                Object.assign(props, { tabIndex: -1 })
              }
            }

            return React.createElement(type, omit(['id'], props as any), children)
          },
        }}
      />
      <S.Title highlighted={highlighted}>{extractTitleFromNoteBody(note.body) || note.id}</S.Title>
    </S.Container>
  )
}

export const NewNoteThumbnail = () => {
  return (
    <S.Container>
      <S.NewNoteSnapshot>+</S.NewNoteSnapshot>
      <S.Title>Add a new note</S.Title>
    </S.Container>
  )
}
