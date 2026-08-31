import { useEffect, useState } from 'react'

interface ImageCarouselProps {
  images: Array<string>
  intervalMs?: number
  /** Overlay gradient applied above the images. */
  overlay?: string
  className?: string
}

const CROSSFADE_MS = 1000

export function ImageCarousel({
  images,
  intervalMs = 6000,
  overlay = 'var(--photo-scrim-hero)',
  className,
}: ImageCarouselProps) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % images.length)
    }, intervalMs)
    return () => window.clearInterval(id)
  }, [images.length, intervalMs])

  return (
    <div
      className={className}
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}
    >
      {images.map((src, i) => (
        <div
          key={src}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: i === active ? 1 : 0,
            transition: `opacity ${CROSSFADE_MS}ms ease`,
          }}
        />
      ))}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: overlay,
          pointerEvents: 'none',
        }}
      />
    </div>
  )
}
