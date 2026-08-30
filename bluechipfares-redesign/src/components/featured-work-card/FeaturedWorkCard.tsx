import { Link } from '@tanstack/react-router'

interface FeaturedWorkCardProps {
  image: string
  alt: string
  title: string
  subtitle?: string
  href: string
  size?: 'lg' | 'md'
}

export function FeaturedWorkCard({
  image,
  alt,
  title,
  subtitle,
  href,
  size = 'md',
}: FeaturedWorkCardProps) {
  const isLarge = size === 'lg'
  return (
    <Link
      to={href}
      style={{
        position: 'relative',
        display: 'block',
        overflow: 'hidden',
        borderRadius: isLarge ? 'var(--radius-2xl)' : 'var(--radius-xl)',
        border: '1px solid var(--line-hairline)',
        minHeight: isLarge ? '26rem' : '12rem',
        width: '100%',
        height: '100%',
      }}
    >
      <img
        src={image}
        alt={alt}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      <span
        style={{
          position: 'absolute',
          inset: 0,
          background: 'var(--photo-scrim)',
        }}
      />
      <span
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          padding: isLarge ? 'var(--space-8)' : 'var(--space-5)',
          display: 'block',
        }}
      >
        <span
          style={{
            display: 'block',
            fontFamily: 'var(--font-display)',
            fontSize: isLarge ? 'clamp(1.625rem, 2.5vw, 2.25rem)' : '1.375rem',
            fontWeight: 'var(--weight-bold)',
            color: 'var(--on-photo-strong)',
            lineHeight: 1.15,
          }}
        >
          {title}
        </span>
        {subtitle && (
          <span
            style={{
              display: 'block',
              marginTop: '0.35rem',
              fontSize: '1.0625rem',
              fontWeight: 'var(--weight-medium)',
              color: 'var(--on-photo-muted)',
            }}
          >
            {subtitle}
          </span>
        )}
      </span>
    </Link>
  )
}
