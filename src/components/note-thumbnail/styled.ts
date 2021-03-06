import styled, { css } from 'styled-components'
import MarkdownComponent from 'markdown-to-jsx'
import { transparentize, darken } from 'polished'

import { tablet } from '~helpers/media'

export const Container = styled.div`
  flex-grow: 0;
  display: flex;
  align-items: center;

  ${tablet.css`
    flex-direction: column;
  `}
`

export const Title = styled.span<{ highlighted?: boolean }>`
  z-index: -1;
  width: 100%;
  max-width: 7.5rem;

  padding: 1rem 0.5rem;
  overflow: hidden;

  font-size: 10px;
  white-space: nowrap;
  text-overflow: ellipsis;

  border-radius: 0 0.1rem 0.1rem 0;
  transition: background-color 150ms;

  ${tablet.css`
    padding: 0.75rem 1rem;
    text-align: center;
    border-radius: 0 0 0.1rem 0.1rem;
  `}

  ${props =>
    props.highlighted && `background-color: ${transparentize(0.8, props.theme.colors.lightGrey)};`}

  ${Container}:hover & {
    text-decoration: underline;

    background-color: ${props =>
      !props.highlighted && transparentize(0.9, props.theme.colors.lightGrey)};
  }
`

export const LinkInPreview = styled.a`
  text-decoration: underline;
`

export const noteSnapshotBase = css`
  flex-shrink: 0;
  height: 5rem;
  width: 7.5rem;

  border: 1px solid ${props => transparentize(0.4, props.theme.colors.grey)};
`

export const NoteSnapshot = styled(MarkdownComponent)`
  ${noteSnapshotBase}

  margin: 0;
  display: block;

  padding: 0.4rem 0.3rem;
  overflow: hidden;

  font-size: 0.25rem;
  word-wrap: break-word;

  cursor: pointer;
  pointer-events: none;

  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

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

  ${props => props.theme.currentTheme === 'dark' && 'box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);'}

  ${Container}:hover & {
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);

    ${props => props.theme.currentTheme === 'dark' && 'box-shadow: 0 2px 3px rgba(0, 0, 0, 0.25);'}
  }
`

export const NewNoteSnapshot = styled.div`
  ${noteSnapshotBase}

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${props => darken(0.1, props.theme.colors.lightGrey)};
  font-size: 2rem;
  line-height: 1.3rem;

  border-color: ${props => darken(0.1, props.theme.colors.lightGrey)};
  border-style: dashed;
  opacity: 0.8;

  ${Container}:hover & {
    opacity: 1;
  }
`
