import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const LinkWrapper = styled(Link)`
  color: inherit;
  text-decoration: none;
  font-size: 1.5rem;
  line-height: 1;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`

const Container = styled.span`
  font-weight: bold;
`

export const Logo = () => {
  return (
    <LinkWrapper to="/">
      <Container>
        <span>notty</span>
      </Container>
    </LinkWrapper>
  )
}
