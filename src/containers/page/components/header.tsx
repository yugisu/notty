import React from 'react'
import styled from 'styled-components'

import { desktop } from '~helpers/media'
import { useCurrentTheme } from '~containers/app-provider/components/current-theme-provider'

import { Logo } from '~components/logo'
import { NotesList } from '~components/notes-list'

const Container = styled.header`
  ${desktop.css`
    position: fixed;
    top: 0;
    max-height: 100%;
    max-width: 20rem;

    padding-left: 2rem;
  `}

  display: flex;
  flex-direction: column;
`

const Meta = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;

  ${desktop.css`
    padding: 1.5rem 1rem 1rem 0;
  `}
`

const ThemeToggler = styled.button`
  margin-left: auto;
  background: none;
  border: none;

  cursor: pointer;
`

export const PageHeader = () => {
  const { currentTheme, setCurrentTheme } = useCurrentTheme()

  const toggleTheme = () => setCurrentTheme(currentTheme === 'dark' ? 'light' : 'dark')

  return (
    <Container>
      <Meta>
        <Logo />
        <ThemeToggler onClick={toggleTheme} title="Toggle color theme">
          {currentTheme === 'dark' ? '🌝' : '🌚'}
        </ThemeToggler>
      </Meta>

      <NotesList />
    </Container>
  )
}

PageHeader.Container = Container
