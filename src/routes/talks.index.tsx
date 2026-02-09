import { createFileRoute } from '@tanstack/react-router'

import { allServices } from 'content-collections'

import RemyAssistant from '@/components/RemyAssistant'
import ServiceCard from '@/components/ServiceCard'

export const Route = createFileRoute('/talks/')({
  component: TalksPage,
})

function TalksPage() {
  return (
    <>
      <RemyAssistant />
      <div className="min-h-screen">
        {/* Hero section */}
        <div className="relative py-16 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-[var(--accent-foreground)] mb-4">
              What we <span className="text-copper italic">Offer</span>
            </h1>
            <p className="text-xl text-[var(--accent-foreground)]/70 max-w-2xl mx-auto font-body">
              The must-dos and the want-tos
            </p>
          </div>
        </div>

        {/* Talks grid */}
        <div className="max-w-7xl mx-auto px-6 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {allServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
