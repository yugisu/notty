import React, { useRef, useLayoutEffect, useCallback } from 'react'
import styled from 'styled-components'

const Container = styled.textarea`
  resize: none;
  width: 100%;

  padding: 1rem;
  display: block;
  overflow: hidden;

  color: inherit;
  font: inherit;

  border: none;

  &:focus {
    outline: none;
  }
`

const createResizer = () => {
  let measurementsNode: HTMLTextAreaElement
  let prevHeight: number

  return (node: HTMLTextAreaElement | null) => {
    if (node) {
      if (!measurementsNode) {
        measurementsNode = node.cloneNode(true) as HTMLTextAreaElement
        measurementsNode.tabIndex = -1
        measurementsNode.style.position = 'absolute'
        measurementsNode.style.top = '0'
        measurementsNode.style.right = '0'
        measurementsNode.style.visibility = 'hidden'
        measurementsNode.style.width = `${node.getBoundingClientRect().width}px`
        measurementsNode.style.height = 'auto'

        document.body.appendChild(measurementsNode)
      }

      measurementsNode.value = node.value

      const newHeight = measurementsNode.scrollHeight

      if (newHeight !== prevHeight) {
        node.style.height = newHeight + 'px'
      }
    }
  }
}

type Props = Omit<React.ComponentPropsWithoutRef<'textarea'>, 'onChange' | 'value'> & {
  onChange: (value: string) => void
  value: string
}

export const Textarea = ({ onChange, value, ...props }: Props) => {
  const containerRef = useRef<HTMLTextAreaElement>(null)

  const resize = useCallback(createResizer(), [])

  useLayoutEffect(() => resize(containerRef.current), [resize])

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value)

    resize(containerRef.current)
  }

  return <Container ref={containerRef} onChange={handleChange} value={value} {...props} />
}
