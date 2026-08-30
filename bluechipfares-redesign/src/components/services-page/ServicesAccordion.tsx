import { useState } from 'react'
import { Link } from '@tanstack/react-router'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '#/components/ui/accordion'
import { getServiceEntries } from '#/components/services-page/service-content'
import { m } from '#/paraglide/messages'

export function ServicesAccordion() {
  const services = getServiceEntries()
  const allValues = services.map((s) => s.slug)
  const [open, setOpen] = useState<Array<string>>([allValues[0]])
  const isAllOpen = open.length === services.length

  return (
    <section
      style={{
        padding: 'clamp(3rem, 7vw, 5rem) clamp(1.5rem, 4vw, 3rem)',
      }}
    >
      <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            gap: 'var(--space-4)',
            paddingBottom: 'var(--space-4)',
            borderBottom: '1px solid var(--line-hairline)',
            marginBottom: 'var(--space-2)',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.75rem',
              letterSpacing: 'var(--tracking-wider)',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
            }}
          >
            {m.services_list_label()}
          </span>
          <button
            type="button"
            onClick={() => setOpen(isAllOpen ? [] : allValues)}
            style={{
              border: 0,
              background: 'none',
              cursor: 'pointer',
              fontFamily: 'var(--font-display)',
              fontSize: '0.9375rem',
              color: 'var(--text-accent)',
            }}
          >
            {isAllOpen ? m.services_collapse_all() : m.services_expand_all()}
          </button>
        </div>

        <Accordion type="multiple" value={open} onValueChange={setOpen}>
          {services.map((service, index) => {
            const isOpen = open.includes(service.slug)
            return (
              <AccordionItem
                key={service.slug}
                value={service.slug}
                className="last:border-b"
                style={{
                  borderBottom: '1px solid var(--line-hairline)',
                }}
              >
                <AccordionTrigger
                  className="hover:no-underline"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-5)',
                    padding: 'var(--space-6) 0',
                    textAlign: 'left',
                    color: 'inherit',
                    borderRadius: 0,
                    textDecoration: 'none',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.8125rem',
                      color: 'var(--text-muted)',
                      width: '2rem',
                      flex: 'none',
                    }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span
                    style={{
                      flex: 1,
                      minWidth: 0,
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.375rem, 2.4vw, 1.875rem)',
                      fontWeight: 'var(--weight-semibold)',
                      color: isOpen
                        ? 'var(--text-accent)'
                        : 'var(--text-heading)',
                      transition: 'color 200ms ease',
                    }}
                  >
                    {service.title}
                  </span>
                </AccordionTrigger>
                <AccordionContent
                  style={{
                    padding: '0 0 var(--space-8) 2.75rem',
                  }}
                >
                  <p
                    style={{
                      margin: '0 0 var(--space-5)',
                      fontSize: '1.3125rem',
                      lineHeight: 'var(--leading-relaxed)',
                      color: 'var(--text-body)',
                      maxWidth: '34rem',
                    }}
                  >
                    {service.detail}
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 'var(--space-2)',
                      marginBottom: 'var(--space-6)',
                    }}
                  >
                    {service.points.map((point) => (
                      <div
                        key={point}
                        style={{
                          display: 'flex',
                          gap: 'var(--space-3)',
                          fontSize: '1.1875rem',
                          color: 'var(--text-body)',
                        }}
                      >
                        <span style={{ color: 'var(--gold)' }}>✦</span>
                        {point}
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 'var(--space-2)',
                      fontFamily: 'var(--font-display)',
                      fontWeight: 'var(--weight-medium)',
                      fontSize: '1.0625rem',
                    }}
                  >
                    {m.services_ask_about()} →
                  </Link>
                </AccordionContent>
              </AccordionItem>
            )
          })}
        </Accordion>
      </div>
    </section>
  )
}
