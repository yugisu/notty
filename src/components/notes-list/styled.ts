import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { transparentize } from 'polished'

import { desktop, tablet } from '~helpers/media'

export const Container = styled.ul`
  list-style: none;

  max-height: 100%;
  margin: 0;

  padding: 1rem;
  display: flex;
  overflow-x: scroll;

  ${desktop.css`
    padding: 1rem 1rem 2rem 0;
    flex-direction: column;

    overflow-x: hidden;
    overflow-y: auto;
  `}

  > *:not(:first-child) {
    ${tablet.css`
      margin-left: 0.75rem;
    `}

    ${desktop.css`
      margin-top: 1rem;
    `}
  }

  @media ${desktop.query} {
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
  }
`

export const ListLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  &:active {
    color: inherit;
  }
`
