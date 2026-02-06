import { useEffect, useRef, useState } from 'react'

export const useIntersectionObserver = <T extends Element>() => {
  const ref = useRef<T>(undefined)
  const [isVisible, setIsvisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsvisible(true)
          if (ref.current) {
            observer.unobserve(ref.current)
          }
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [])

  return { ref, isVisible }
}
