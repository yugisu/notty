import { useRef, useEffect } from 'react'

export const useIsInitialRender = () => {
  const initialRenderRef = useRef(true)

  const isInitialRender = initialRenderRef.current

  useEffect(() => void (initialRenderRef.current = false), [])

  return isInitialRender
}
