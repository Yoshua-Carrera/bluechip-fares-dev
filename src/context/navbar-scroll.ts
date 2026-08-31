import { useEffect, useRef, useState } from 'react'

const REVEAL_THRESHOLD = 80
const DELTA_MIN = 6

export const useHideOnScrollDown = (): boolean => {
  const [hidden, setHidden] = useState(false)
  const lastYRef = useRef(0)

  useEffect(() => {
    lastYRef.current = window.scrollY

    const onScroll = () => {
      const y = window.scrollY
      const delta = y - lastYRef.current
      if (Math.abs(delta) < DELTA_MIN) return
      lastYRef.current = y
      if (y < REVEAL_THRESHOLD) {
        setHidden(false)
      } else {
        setHidden(delta > 0)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return hidden
}
