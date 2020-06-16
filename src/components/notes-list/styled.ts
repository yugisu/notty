import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { transparentize } from 'polished'

export const Container = styled.ul`
  max-height: 100%;

  list-style: none;
  margin: 0;
  padding: 1rem 1rem 2rem 0;

  overflow-x: hidden;
  overflow-y: auto;

  > *:not(:first-child) {
    margin-top: 1rem;
  }

  /* Scrollbar */

  scrollbar-width: thin;
  scrollbar-color: transparent transparent;

  &::-webkit-scrollbar {
    width: 0.35rem;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: transparent;
  }

  &:hover {
    scrollbar-color: ${props => transparentize(0.8, props.theme.colors.lightGrey)} transparent;

    &::-webkit-scrollbar-thumb {
      background: ${props => transparentize(0.8, props.theme.colors.lightGrey)};

      &:hover {
        background: ${props => transparentize(0.4, props.theme.colors.lightGrey)};
      }
    }
  }
`

export const ListLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`
