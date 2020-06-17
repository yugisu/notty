import styled, { css } from 'styled-components'
import MarkdownComponent from 'markdown-to-jsx'
import { transparentize, darken } from 'polished'

export const Container = styled.div`
  display: flex;
  align-items: center;
`

export const Title = styled.span<{ highlighted?: boolean }>`
  width: 100%;
  padding: 1rem 0.5rem;

  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-radius: 0 0.1rem 0.1rem 0;
  transition: background-color 150ms;

  ${props =>
    props.highlighted && `background-color: ${transparentize(0.8, props.theme.colors.lightGrey)};`}

  ${Container}:hover & {
    text-decoration: underline;
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

  padding: .4rem .3rem;
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
