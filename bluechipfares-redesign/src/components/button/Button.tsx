import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  CSSProperties,
  ReactNode,
} from 'react'

export type ButtonVariant = 'primary' | 'outline' | 'accent'
export type ButtonTone = 'on-surface' | 'on-photo'

interface CommonProps {
  variant?: ButtonVariant
  tone?: ButtonTone
  children: ReactNode
  className?: string
  style?: CSSProperties
}

type LinkButtonProps = CommonProps & {
  href: string
} & Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    'href' | 'className' | 'style'
  >

type ActionButtonProps = CommonProps & {
  href?: never
} & Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    'className' | 'style' | 'children'
  >

export type ButtonProps = LinkButtonProps | ActionButtonProps

function baseStyle(variant: ButtonVariant, tone: ButtonTone): CSSProperties {
  const shared: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-2)',
    padding: '0.95rem 1.9rem',
    borderRadius: 'var(--radius-pill)',
    fontFamily: 'var(--font-display)',
    fontSize: '1.0625rem',
    fontWeight: 'var(--weight-semibold)',
    cursor: 'pointer',
    textDecoration: 'none',
    border: '1px solid transparent',
    transition:
      'transform 300ms ease, background 200ms ease, color 200ms ease, border-color 200ms ease',
    lineHeight: 1,
  }

  if (variant === 'primary') {
    return {
      ...shared,
      background:
        tone === 'on-photo' ? 'var(--on-photo-strong)' : 'var(--text-accent)',
      color: 'var(--charcoal)',
    }
  }
  if (variant === 'accent') {
    return {
      ...shared,
      background: 'var(--text-accent)',
      color: 'var(--charcoal)',
    }
  }
  return {
    ...shared,
    background: 'transparent',
    color:
      tone === 'on-photo' ? 'var(--on-photo-strong)' : 'var(--text-heading)',
    borderColor:
      tone === 'on-photo' ? 'var(--line-on-photo)' : 'var(--line-hairline)',
  }
}

export function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    tone = 'on-surface',
    children,
    className,
    style,
  } = props

  const combined: CSSProperties = { ...baseStyle(variant, tone), ...style }

  if ('href' in props && props.href !== undefined) {
    const {
      variant: _v,
      tone: _t,
      children: _c,
      className: _cn,
      style: _s,
      ...rest
    } = props
    void _v
    void _t
    void _c
    void _cn
    void _s
    return (
      <a {...rest} className={className} style={combined}>
        {children}
      </a>
    )
  }

  const {
    variant: _v,
    tone: _t,
    children: _c,
    className: _cn,
    style: _s,
    ...rest
  } = props
  void _v
  void _t
  void _c
  void _cn
  void _s
  return (
    <button {...rest} className={className} style={combined}>
      {children}
    </button>
  )
}
