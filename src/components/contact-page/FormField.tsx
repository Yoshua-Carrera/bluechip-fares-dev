import type { CSSProperties, ReactNode } from 'react'

import { m } from '#/paraglide/messages'

interface FormFieldProps {
  htmlFor: string
  label: string
  required?: boolean
  error?: string
  hint?: ReactNode
  children: ReactNode
}

export function FormField({
  htmlFor,
  label,
  required = false,
  error,
  hint,
  children,
}: FormFieldProps) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: '0.5rem',
          marginBottom: '0.55rem',
          fontFamily: 'var(--font-display)',
          fontSize: '1.0625rem',
          fontWeight: 'var(--weight-semibold)',
          color: 'var(--on-panel)',
        }}
      >
        {label}
        {required ? (
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 'var(--weight-semibold)',
              color: 'var(--destructive)',
              letterSpacing: 'var(--tracking-wider)',
              textTransform: 'uppercase',
            }}
          >
            * {m.contact_form_required()}
          </span>
        ) : null}
      </label>
      {children}
      {(error || hint) && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: 'var(--space-4)',
            marginTop: '0.5rem',
            fontSize: '1rem',
            fontWeight: 'var(--weight-medium)',
          }}
        >
          <span style={{ color: 'var(--destructive)' }}>{error ?? ''}</span>
          {hint ? (
            <span style={{ color: 'var(--on-panel-muted)', flex: 'none' }}>
              {hint}
            </span>
          ) : null}
        </div>
      )}
    </div>
  )
}

export function fieldControlStyle(hasError: boolean): CSSProperties {
  return {
    width: '100%',
    boxSizing: 'border-box',
    padding: '0.9rem 1.05rem',
    borderRadius: 'var(--radius-lg)',
    border: `1px solid ${hasError ? 'var(--destructive)' : 'var(--line-strong)'}`,
    background: 'var(--surface-input)',
    color: 'var(--on-panel)',
    fontFamily: 'var(--font-body)',
    fontSize: '1.125rem',
    fontWeight: 'var(--weight-medium)',
  }
}
