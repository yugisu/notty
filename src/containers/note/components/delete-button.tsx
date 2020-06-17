import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { throttle } from 'lodash'

import { Utility } from '../styled'

const Container = styled(Utility)<{ clicked: boolean }>`
  ${props =>
    props.clicked &&
    css`
      background-color: ${props.theme.colors.danger};
      color: ${props.theme.colors.white};
      font-weight: bold;
    `}
`

type Props = React.ComponentPropsWithoutRef<'button'>

const handleClick = throttle(
  <E extends React.SyntheticEvent = React.MouseEvent<HTMLButtonElement>>(
    e: E,
    cb?: (e: E) => void,
  ) => cb?.(e),
  850,
  { trailing: false },
)

export const DeleteButton = ({ onClick, onBlur, ...props }: Props) => {
  const [clicked, setClicked] = useState(false)

  const handleBlur = (e: React.FocusEvent<HTMLButtonElement>) => (setClicked(false), onBlur?.(e))

  return (
    <Container
      clicked={clicked}
      onClick={e => handleClick(e, clicked ? onClick : () => setClicked(true))}
      onBlur={handleBlur}
      {...props}
    />
  )
}
