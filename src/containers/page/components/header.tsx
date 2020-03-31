import React from 'react'
import styled from 'styled-components'

import { Logo } from '~components/logo'

const Container = styled.header`
  padding: 0 2rem;
  width: fit-content;
  min-width: 10rem;
`

type Props = {}

export const PageHeader = (props: Props) => {
  return (
    <Container>
      <Logo />
    </Container>
  )
}

PageHeader.Container = Container
