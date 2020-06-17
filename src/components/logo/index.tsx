import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const LinkWrapper = styled(Link)`
  color: inherit;
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }

  &:active {
    color: inherit;
  }
`

const Container = styled.span`
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 1.5rem;
`

export const Logo = () => {
  return (
    <LinkWrapper to="/">
      <Container>notty</Container>
    </LinkWrapper>
  )
}
