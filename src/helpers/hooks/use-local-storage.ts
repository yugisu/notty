import { useState, useEffect, useCallback, useMemo } from 'react'

const obtainValue = (key: string) => {
  let value = null

  try {
    const valueJson = localStorage.getItem(key)

    if (valueJson) {
      value = JSON.parse(valueJson)
    }
  } catch (error) {}

  return value
}

export const useLocalStorage = <TValue>(
  key: string,
  defaultValue?: TValue,
): [TValue, (newValue: TValue) => void] => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizedDefaultValue = useMemo(() => defaultValue, [])

  const [value, setValue] = useState(() => obtainValue(key) ?? memoizedDefaultValue)

  const updateValue = useCallback(
    (newValue: TValue) => (setValue(newValue), localStorage.setItem(key, JSON.stringify(newValue))),
    [key],
  )

  useEffect(() => {
    if (value === memoizedDefaultValue) {
      localStorage.setItem(key, JSON.stringify(memoizedDefaultValue))
    }
  }, [memoizedDefaultValue, key, value])

  useEffect(() => {
    const handleStorage = () => {
      const newValue = obtainValue(key) ?? memoizedDefaultValue

      setValue(newValue)
    }

    window.addEventListener('storage', handleStorage)

    return () => window.removeEventListener('storage', handleStorage)
  }, [memoizedDefaultValue, key])

  return [value, updateValue]
}
