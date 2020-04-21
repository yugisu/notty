import styled from 'styled-components'

import { Textarea } from '~components/textarea'

export const Container = styled.div`
  position: relative;
  width: 100%;
  min-width: 20rem;

  background-color: ${props => props.theme.colors.light};
  border: 1px solid #444;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
`

export const Header = styled.div`
  position: sticky;
  top: 0;

  padding: 0.5rem 1rem;
  display: flex;

  background-color: inherit;

  border-bottom: 1px solid;
  border-bottom-color: inherit;
`

export const Utilities = styled.div`
  margin-left: auto;

  display: flex;
  flex-wrap: nowrap;
`

export const Utility = styled.button`
  padding: 0.15rem 0.25rem;

  color: #444;
  font-size: 0.8em;

  opacity: 0.6;

  background: none;
  border: none;
  cursor: pointer;

  &:hover,
  &:focus {
    opacity: 1;
  }
`

export const Field = styled(Textarea)`
  min-height: 10rem;
  background: inherit;

  &:focus {
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  }
`

export const PlainInner = styled.div`
  padding: 1rem;
`
