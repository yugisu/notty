import React from 'react'

export const CustomInput = ({ readOnly, ...props }: React.ComponentProps<'input'>) => (
  <input readOnly={props.type === 'checkbox' ? false : readOnly} {...props} />
)
