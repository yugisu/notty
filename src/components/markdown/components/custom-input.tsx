import React from 'react'

export const CustomInput = ({
  readOnly,
  onDoubleClick,
  ...props
}: React.ComponentProps<'input'>) => (
  <input
    onDoubleClick={e => (e.stopPropagation(), onDoubleClick?.(e))}
    readOnly={props.type === 'checkbox' ? false : readOnly}
    {...props}
  />
)
