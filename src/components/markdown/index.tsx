import React, { useCallback, useRef } from 'react'
import MarkdownComponent from 'markdown-to-jsx'
import styled from 'styled-components'

import { CustomInput } from './components/custom-input'
import { CustomLink } from './components/custom-link'

const Container = styled.div`
  word-wrap: break-word;
`

type Props = {
  source: string
  onSourceChange: (value: string) => void
}

export const Markdown = ({ source, onSourceChange }: Props) => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  const handleCheckboxClick = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (containerRef.current) {
        const allCheckboxes = containerRef.current.querySelectorAll('input[type="checkbox"]')
        const targetIndex = [...allCheckboxes].indexOf(e.target)

        const replaceTarget = /\[[ x]\]/g
        const valueToReplaceWith = e.target.checked ? '[x]' : '[ ]'

        let occurence = 0

        const newSource = source.replace(replaceTarget, match =>
          occurence++ === targetIndex ? valueToReplaceWith : match,
        )

        onSourceChange(newSource)
      }
    },
    [onSourceChange, source],
  )

  return (
    <Container ref={containerRef}>
      <MarkdownComponent
        options={{
          overrides: {
            input: {
              component: CustomInput,
              props: {
                onChange: handleCheckboxClick,
              },
            },
            a: CustomLink,
          },
        }}
      >
        {source}
      </MarkdownComponent>
    </Container>
  )
}
