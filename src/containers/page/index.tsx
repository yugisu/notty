import React from 'react'
import styled from 'styled-components'

import { PageHeader } from './components/header'

const Container = styled.div`
  position: relative;
  min-height: 100vh;

  display: grid;
  grid-template-columns: minmax(20rem, 1fr) 40rem 1fr;
`

const Body = styled.main`
  padding: 4.5rem 1rem 2rem;

  grid-column: 2;
`

type Props = {
  children: React.ReactNode
}

export const Page = ({ children }: Props) => {
  return <Container>{children}</Container>
}

Page.Header = PageHeader
Page.Body = Body
