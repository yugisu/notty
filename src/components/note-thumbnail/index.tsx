import React from 'react'
import styled, { css } from 'styled-components'
import MarkdownComponent from 'markdown-to-jsx'
import { transparentize } from 'polished'

import { NoteType } from '~types/note'
import { extractTitleFromNoteBody } from '~helpers/notes/body-to-title'

const Container = styled.div`
  display: flex;
  align-items: center;
`

const noteSnapshotBase = css`
  flex-shrink: 0;
  height: 5rem;
  width: 7.5rem;

  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.lightGrey};

  ${Container}:hover & {
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  }
`

const Title = styled.span<{ highlighted?: boolean }>`
  width: 100%;
  padding: 1rem 0.5rem;

  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${props =>
    props.highlighted && `background-color: ${transparentize(0.8, props.theme.colors.lightGrey)}`};

  ${Container}:hover & {
    text-decoration: underline;
  }
`

const NoteSnapshot = styled(MarkdownComponent)`
  ${noteSnapshotBase}

  padding: .4rem .3rem;
  overflow: hidden;

  font-size: 0.25rem;
  word-wrap: break-word;

  cursor: pointer;
  pointer-events: none;

  input {
    font-size: inherit;
    height: 1em;

    &[type='checkbox'] {
      width: 1em;
      margin: 0.4em;
    }
  }

  ol,
  ul {
    padding-inline-start: 2.5em;
  }
`

const LinkInPreview = styled.a`
  text-decoration: underline;
`

type Props = {
  note: NoteType
  highlighted?: boolean
}

export const NoteThumbnail = ({ note, highlighted = false }: Props) => {
  return (
    <Container>
      <NoteSnapshot
        role="img"
        children={note.body}
        options={{
          overrides: {
            a: {
              component: LinkInPreview,
              props: { as: 'span' },
            },
          },
        }}
      />
      <Title highlighted={highlighted}>{extractTitleFromNoteBody(note.body) || note.id}</Title>
    </Container>
  )
}

const NewNoteSnapshot = styled.div`
  ${noteSnapshotBase}
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
