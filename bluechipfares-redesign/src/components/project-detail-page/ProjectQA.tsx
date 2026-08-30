import { useState } from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '#/components/ui/accordion'
import type { ProjectQA as ProjectQAItem } from '#/components/project-detail-page/project-content'
import { m } from '#/paraglide/messages'

interface ProjectQAProps {
  items: Array<ProjectQAItem>
}

export function ProjectQA({ items }: ProjectQAProps) {
  const [open, setOpen] = useState<Array<string>>(['q-0'])

  return (
    <section
      style={{
        padding: '0 clamp(1.5rem, 4vw, 3rem) clamp(3rem, 7vw, 5rem)',
      }}
    >
      <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
        <h2
          style={{
            margin: '0 0 var(--space-6)',
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.5rem, 2.6vw, 2rem)',
            fontWeight: 'var(--weight-bold)',
            color: 'var(--text-heading)',
          }}
        >
          {m.project_qa_title()}
        </h2>
        <Accordion type="multiple" value={open} onValueChange={setOpen}>
          {items.map((item, index) => {
            const value = `q-${index}`
            const isOpen = open.includes(value)
            return (
              <AccordionItem
                key={value}
                value={value}
                className="last:border-b"
                style={{
                  borderBottom: '1px solid var(--line-hairline)',
                }}
              >
                <AccordionTrigger
                  className="hover:no-underline"
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 'var(--space-4)',
                    padding: 'var(--space-5) 0',
                    textAlign: 'left',
                    color: 'inherit',
                    borderRadius: 0,
                    textDecoration: 'none',
                  }}
                >
                  <span
                    style={{
                      flex: 1,
                      minWidth: 0,
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.4375rem',
                      fontWeight: 'var(--weight-medium)',
                      color: isOpen
                        ? 'var(--text-accent)'
                        : 'var(--text-heading)',
                      lineHeight: 1.35,
                      transition: 'color 200ms ease',
                    }}
                  >
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <p
                    style={{
                      margin: '0 0 var(--space-6)',
                      maxWidth: '44rem',
                      fontSize: '1.25rem',
                      lineHeight: 'var(--leading-relaxed)',
                      color: 'var(--on-panel)',
                    }}
                  >
                    {item.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            )
          })}
        </Accordion>
      </div>
    </section>
  )
}
