import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

import { allServices } from 'content-collections'

import type { Meta } from '@content-collections/core'
import type { Service } from 'content-collections'
import type { Ref } from 'react'
import RemyAssistant from '@/components/RemyAssistant'
import { Button } from '@/components/ui/button'
import { useIntersectionObserver } from '@/hooks/intersection-observer'
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from '@/components/ui/combobox'
import ServiceCard from '@/components/ServiceCard'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export const Route = createFileRoute('/services-offered/$slug')({
  loader: ({ params }): { service: Service } => {
    const service = allServices.find((s) => s.slug === params.slug)
    if (!service) {
      return {
        service: {
          title: 'All',
          slug: 'all',
          services: [],
          serviceDescriptions: [],
          image: '',
          content: '',
          _meta: {} as Meta,
        },
      }
    }
    return { service }
  },
  component: ServicesOfferedPage,
})

function ServicesOfferedPage() {
  const { service } = Route.useLoaderData()
  const [currentSelected, setCurrentSelected] = useState(service.title)
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>()

  const navigate = useNavigate()

  useEffect(() => {
    setCurrentSelected(service.title)
  }, [service])

  return (
    <>
      <RemyAssistant />
      <div className="min-h-screen flex flex-col items-center gap-12">
        {/* Hero section */}
        <div className="relative py-16 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-[var(--accent-foreground)] mb-4">
              Services <span className="text-copper italic">offered</span>
            </h1>
            <p className="text-xl text-[var(--accent-foreground)] max-w-2xl mx-auto font-body">
              Providing dependable contracting services with expert craftsmanship, attention to
              detail, and a commitment to exceeding client expectations.
            </p>
          </div>
        </div>

        <Combobox
          items={[{ title: 'All', slug: 'all' }, ...allServices]}
          onValueChange={(e: string | null) => {
            if (e) {
              setCurrentSelected(e)
              navigate({
                to: '/services-offered/$slug',
                params: { slug: e },
              })
            }
          }}
          value={currentSelected}
        >
          <ComboboxInput
            placeholder="Select a service to learn more"
            className={'w-11/12 md:w-2/5'}
            value={currentSelected}
          />
          <ComboboxContent>
            <ComboboxEmpty>No items found.</ComboboxEmpty>
            <ComboboxList>
              {(item: Service) => (
                <ComboboxItem key={item.slug} value={item.slug}>
                  {item.title}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>

        {currentSelected === 'All' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((s, index) => (
              <ServiceCard key={s.slug} service={s} index={index} />
            ))}
          </div>
        )}

        {currentSelected !== 'All' && (
          <>
            <div className="w-11/12 md:w-2/5 mt-4">
              <ServiceCard service={service} />
            </div>
            <div className={`py-4 w-full px-2 flex justify-center fade-in is-visible`}>
              <div className="prose prose-lg w-4xl prose-invert prose-p:text-cream/80 prose-headings:text-cream prose-headings:font-display prose-strong:text-cream prose-a:text-gold font-body text-lg leading-relaxed flex justify-center">
                <Accordion
                  type="single"
                  collapsible
                  defaultValue="shipping"
                  className="w-full p-6 bg-gradient-to-br dark:from-card dark:to-charcoal/90 light:from-card/50 light:to-copper/10 border border-copper/30 rounded-lg"
                >
                  {service.services.map((q: string, i: number) => (
                    <>
                      <AccordionItem value={q + i}>
                        <AccordionTrigger className="text-[var(--accent-foreground)] mb-2">
                          {q}
                        </AccordionTrigger>
                        <AccordionContent className="text-[var(--accent-foreground)]">
                          {service.serviceDescriptions[i]}
                        </AccordionContent>
                      </AccordionItem>
                    </>
                  ))}
                </Accordion>
              </div>
            </div>
          </>
        )}

        {/* CTA Section */}
        <section className="py-20 px-6 light:bg-muted/90">
          <div
            ref={ref as Ref<HTMLDivElement>}
            className={`max-w-4xl mx-auto text-center fade-in ${isVisible ? 'is-visible' : ''}`}
          >
            <div className="relative p-12 rounded-3xl bg-gradient-to-br dark:from-card dark:to-charcoal light:from-foreground light:to-primary border border-border/50 overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-copper/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/5 rounded-full blur-3xl" />

              <div className="relative">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mb-4">
                  Need help with your next{' '}
                  <span className="block italic text-copper">project?</span>
                </h2>
                <p className="text-cream/60 text-lg font-body mb-8 max-w-2xl mx-auto">
                  Let’s create a space that fits your life, your style, and your budget.
                </p>
                <div className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-[var(--primary)]/10 text-white text-bold rounded-full border border-copper/70 hover:bg-accent/10 hover:text-white dark:hover:bg-accent/10">
                  <Button
                    variant={'ghost'}
                    className="hover:bg-transparent hover:text-white dark:hover:bg-transparent"
                    onClick={() =>
                      navigate({
                        to: '/contact-us',
                      })
                    }
                  >
                    Contact us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
