import React, { useState, useEffect, useCallback } from 'react'
import { debounce } from 'lodash'

import { NoteType } from '~types/note'
import { useIsInitialRender } from '~helpers/hooks/use-is-initial-render'

import * as S from './styled'

type Props = {
  note: NoteType
  onChange: (body: string) => void
}

export const NoteEditView = ({ note, onChange }: Props) => {
  const isInitialRender = useIsInitialRender()

  const [innerValue, setInnerValue] = useState(() => note.body)

  const triggerOnChange = useCallback(
    debounce<(body: string) => void>(body => onChange(body), 1500),
    [],
  )

  useEffect(() => void (!isInitialRender && triggerOnChange(innerValue)), [
    innerValue,
    isInitialRender,
    triggerOnChange,
  ])

  useEffect(() => () => triggerOnChange.flush(), [triggerOnChange])

  return (
    <>
      <S.Field value={innerValue} onChange={text => setInnerValue(text)} autoFocus />
    </>
  )
}
