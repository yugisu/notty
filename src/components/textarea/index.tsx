import React, { useRef, useLayoutEffect } from 'react'
import styled from 'styled-components'

const Container = styled.textarea`
  resize: none;
  width: 100%;

  padding: 1rem;
  display: block;
  overflow: hidden;

  font: inherit;

  border: none;

  &:focus {
    outline: none;
  }
`

const resize = (node: HTMLTextAreaElement | null) => {
  if (node) {
    node.style.height = 'auto'
    node.style.height = node.scrollHeight + 'px'
  }
}

type Props = Omit<React.ComponentPropsWithoutRef<'textarea'>, 'onChange' | 'value'> & {
  onChange: (value: string) => void
  value: string
}

export const Textarea = ({ onChange, value, ...props }: Props) => {
  const containerRef = useRef<HTMLTextAreaElement | null>(null)

  useLayoutEffect(() => resize(containerRef.current), [])

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value)

    resize(containerRef.current)
  }

  return <Container ref={containerRef} onChange={handleChange} value={value} {...props} />
}
