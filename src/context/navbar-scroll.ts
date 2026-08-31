import { useEffect, useRef, useState } from 'react'

const REVEAL_THRESHOLD = 80
const DELTA_MIN = 6

export const useHideOnScrollDown = (): boolean => {
  const [hidden, setHidden] = useState(false)
  const lastYRef = useRef(0)

  useEffect(() => {
    const container = document.createElement('div')
    container.setAttribute('aria-hidden', 'true')
    container.style.cssText =
      'position:absolute;top:0;left:0;width:1px;pointer-events:none;visibility:hidden;z-index:-1;overflow:hidden;'
    document.body.appendChild(container)

    const io = new IntersectionObserver(
      () => {
        const y = window.scrollY
        const delta = y - lastYRef.current
        if (Math.abs(delta) < DELTA_MIN) return
        lastYRef.current = y
        if (y < REVEAL_THRESHOLD) {
          setHidden(false)
        } else {
          setHidden(delta > 0)
        }
      },
      { threshold: Array.from({ length: 20 }, (_, i) => i / 20) },
    )

    const rebuild = () => {
      container.replaceChildren()
      const vh = window.innerHeight
      const total = Math.max(document.documentElement.scrollHeight, vh)
      container.style.height = `${total}px`
      const count = Math.ceil(total / vh)
      for (let i = 0; i < count; i++) {
        const s = document.createElement('div')
        s.style.cssText = `position:absolute;left:0;width:1px;top:${i * vh}px;height:${vh}px;`
        container.appendChild(s)
        io.observe(s)
      }
    }
    rebuild()

    const ro = new ResizeObserver(rebuild)
    ro.observe(document.body)

    return () => {
      io.disconnect()
      ro.disconnect()
      container.remove()
    }
  }, [])

  return hidden
}
