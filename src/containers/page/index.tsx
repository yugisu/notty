import React from 'react'
import styled from 'styled-components'

import { PageHeader } from './components/header'

const Container = styled.div`
  position: relative;
  padding-top: 5rem;

  display: grid;
  grid-template-columns: 1fr 40rem 1fr;
`

const Body = styled.main`
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
