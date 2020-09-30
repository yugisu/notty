import React from 'react'
import styled from 'styled-components'
import { transparentize } from 'polished'

type Props = Omit<React.ComponentProps<'code'>, 'ref'>

export const CustomCode = ({ children, onClick, ...props }: Props) => {
  const onContainerClick = (e: React.MouseEvent<HTMLElement>) => {
    onClick?.(e)

    if (typeof children === 'string') {
      navigator.clipboard.writeText(children)
    }
  }

  return (
    <Container onClick={onContainerClick} {...props}>
      {children}
    </Container>
  )
}

const Container = styled.code`
  padding: 2px 4px;

  word-break: break-all;

  cursor: pointer;
  background-color: ${props => transparentize(0.7, props.theme.colors.grey)};
  border-radius: 3px;
`
