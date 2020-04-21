import React from 'react'
import styled from 'styled-components'

import { NoteType } from '~types/note'
import { extractTitleFromNoteBody } from '~helpers/notes/body-to-title'

const Container = styled.div`
  display: flex;
  align-items: center;
`

const NoteSnapshot = styled.div`
  flex-shrink: 0;
  height: 5rem;
  width: 7.5rem;

  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.lightGrey};
`

const Title = styled.span`
  margin-left: 0.5rem;

  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${Container}:hover & {
    text-decoration: underline;
  }
`

type Props = {
  note: NoteType
}

export const NoteThumbnail = ({ note }: Props) => {
  return (
    <Container>
      <NoteSnapshot />
      <Title>{note.title || extractTitleFromNoteBody(note.body) || note.id}</Title>
    </Container>
  )
}

const NewNoteSnapshot = styled(NoteSnapshot)`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${props => props.theme.colors.lightGrey};
  font-size: 2rem;
  line-height: 1.3rem;

  background-color: ${props => props.theme.colors.light};
  border-style: dashed;

  &::before {
    content: '+';
  }
`

export const NewNoteThumbnail = () => {
  return (
    <Container>
      <NewNoteSnapshot />
      <Title>Add a new note</Title>
    </Container>
  )
}
