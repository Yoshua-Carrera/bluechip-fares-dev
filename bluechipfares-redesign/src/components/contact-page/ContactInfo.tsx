import type { ReactNode } from 'react'

import { m } from '#/paraglide/messages'

interface InfoRowProps {
  glyph: string
  label: string
  children: ReactNode
}

function InfoRow({ glyph, label, children }: InfoRowProps) {
  return (
    <div
      style={{
        display: 'flex',
        gap: 'var(--space-4)',
        alignItems: 'flex-start',
      }}
    >
      <span
        style={{
          width: '2.5rem',
          height: '2.5rem',
          flex: 'none',
          display: 'grid',
          placeItems: 'center',
          borderRadius: 'var(--radius-pill)',
          border: '1px solid var(--accent-hairline)',
          color: 'var(--copper)',
        }}
      >
        {glyph}
      </span>
      <span>
        <span
          style={{
            display: 'block',
            marginBottom: '0.2rem',
            fontFamily: 'var(--font-display)',
            fontSize: '1rem',
            fontWeight: 'var(--weight-semibold)',
            letterSpacing: 'var(--tracking-wider)',
            textTransform: 'uppercase',
            color: 'var(--on-panel)',
          }}
        >
          {label}
        </span>
        {children}
      </span>
    </div>
  )
}

const linkStyle = {
  fontSize: '1.25rem',
  fontWeight: 'var(--weight-semibold)',
  color: 'var(--text-heading)',
} as const

export function ContactInfo() {
  return (
    <div>
      <h2
        style={{
          margin: '0 0 var(--space-5)',
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
          fontWeight: 'var(--weight-bold)',
          color: 'var(--text-heading)',
          lineHeight: 1.15,
        }}
      >
        {m.contact_reach_lead()}{' '}
        <span style={{ fontStyle: 'italic', color: 'var(--text-accent)' }}>
          {m.contact_reach_accent()}
        </span>
      </h2>
      <p
        style={{
          margin: '0 0 var(--space-8)',
          maxWidth: '26rem',
          fontSize: '1.3rem',
          fontWeight: 'var(--weight-medium)',
          lineHeight: 'var(--leading-relaxed)',
          color: 'var(--on-panel)',
        }}
      >
        {m.contact_reach_desc()}
      </p>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-5)',
        }}
      >
        <InfoRow glyph="✆" label={m.contact_phone_label()}>
          <a
            href={`tel:${m.contact_phone().replace(/[^\d+]/g, '')}`}
            style={linkStyle}
          >
            <p className="hover:text-(--copper)">{m.contact_phone()}</p>
          </a>
        </InfoRow>
        <InfoRow glyph="✉" label={m.contact_email_label()}>
          <a href={`mailto:${m.contact_email()}`} style={linkStyle}>
            <p className="hover:text-(--copper)">{m.contact_email()}</p>
          </a>
        </InfoRow>
        <InfoRow glyph="◉" label={m.contact_address_label()}>
          <span
            style={{
              display: 'block',
              fontSize: '1.25rem',
              fontWeight: 'var(--weight-medium)',
              color: 'var(--text-heading)',
              lineHeight: 'var(--leading-relaxed)',
            }}
          >
            <p className="hover:text-(--copper)">
              {m.contact_address_line_1()}
              <br />
              {m.contact_address_line_2()}
            </p>
          </span>
        </InfoRow>
        <InfoRow glyph="▤" label={m.contact_hours_label()}>
          <span
            style={{
              display: 'block',
              fontSize: '1.1875rem',
              color: 'var(--text-heading)',
            }}
          >
            {m.contact_hours()}
          </span>
        </InfoRow>
      </div>
    </div>
  )
}
