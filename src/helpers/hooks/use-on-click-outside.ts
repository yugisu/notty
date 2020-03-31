import { useRef, useEffect } from 'react'

const handleClickOutside = (target: HTMLElement, callback: () => void) => (e: MouseEvent) => {
  const eventTarget = e.target as HTMLElement

  if (target !== eventTarget && !target.contains(eventTarget)) {
    callback()
  }
}

export const useOnClickOutside = <TTarget extends HTMLElement>(callback: () => void) => {
  const elementRef = useRef<TTarget | null>(null)

  useEffect(() => {
    if (elementRef.current) {
      const handleClick = handleClickOutside(elementRef.current, callback)

      document.addEventListener('click', handleClick)

      return () => document.removeEventListener('click', handleClick)
    }
  }, [callback])

  return elementRef
}
