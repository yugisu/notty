import React from 'react'
import styled from 'styled-components'

import { Logo } from '~components/logo'
import { NotesList } from '~components/notes-list'

const Container = styled.header`
  position: fixed;
  top: 0;
  max-height: 100%;
  max-width: 20rem;

  padding-left: 2rem;
  display: flex;
  flex-direction: column;
`

const Meta = styled.div`
  padding: 1.5rem 0 1rem;
`

export const PageHeader = () => {
  return (
    <Container>
      <Meta>
        <Logo />
      </Meta>

      <NotesList />
    </Container>
  )
}

PageHeader.Container = Container
