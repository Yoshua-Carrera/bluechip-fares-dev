import { createFileRoute } from '@tanstack/react-router'

import { allGalleries } from 'content-collections'

import SpeakerCard from '@/components/SpeakerCard'
import RemyAssistant from '@/components/RemyAssistant'

export const Route = createFileRoute('/gallery/')({
  component: SpeakersPage,
})

function SpeakersPage() {
  return (
    <>
      <RemyAssistant />
      <div className="min-h-screen">
        {/* Hero section */}
        <div className="relative py-16 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-[var(--accent-foreground)] mb-4">
              From <span className="text-copper italic">Plans</span> To{' '}
              <span className="text-copper italic">Reality</span>
            </h1>
            <p className="text-xl text-[var(--accent-foreground)] max-w-2xl mx-auto font-body">
              Hand-crafted with quality, detail, and pride
            </p>
          </div>
        </div>

        {/* Speakers grid */}
        <div className="max-w-7xl mx-auto px-6 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allGalleries.map((gallery) => (
              <SpeakerCard key={gallery.slug} gallery={gallery} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
