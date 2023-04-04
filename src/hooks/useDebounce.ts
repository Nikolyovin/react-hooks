import { useCallback, useRef } from 'react'
// РАБОТАЕТ но не разобрался в типах !!! НО ЕСТЬ АНАЛОГ СМОТРИ react-advanced-github
//хук для того чтобы отправлять запросы с задержкой принимает callback и delay(задержку)
export default function useDebounce(
  callback: (query: string) => Promise<void>,
  delay: number
) {
  let timer = useRef()

  const debouncedCallback = useCallback(
    (...args: any) => {
      // при повторной
      if (timer.current) {
        clearTimeout(timer.current)
      }
      //делаем таймаут
      timer.current = setTimeout(() => {
        callback(...args)
      }, delay)
    },
    [callback, delay]
  )
  return debouncedCallback
}
