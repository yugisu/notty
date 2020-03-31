import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const LinkWrapper = styled(Link)`
  color: inherit;
  text-decoration: none;
  font-weight: 900;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`

const Container = styled.span`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
`

export const Logo = () => {
  return (
    <LinkWrapper to="/">
      <Container>
        <span>Notty</span>
        <span role="img" aria-hidden>
          📓
        </span>
      </Container>
    </LinkWrapper>
  )
}
