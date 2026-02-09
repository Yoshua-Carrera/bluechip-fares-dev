import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowLeft, MapPin } from 'lucide-react'

import { allGalleries, allTalks } from 'content-collections'

import { useEffect } from 'react'
import RemyAssistant from '@/components/RemyAssistant'
import TalkCard from '@/components/TalkCard'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export const Route = createFileRoute('/gallery/$slug')({
  loader: ({ params }) => {
    const gallery = allGalleries.find((g) => g.slug === params.slug)
    if (!gallery) {
      throw new Error('Gallery not found')
    }

    const speakerTalks = allTalks.filter((t) => t.speaker === gallery.name)
    return { gallery, speakerTalks }
  },
  component: SpeakerDetailPage,
})

function SpeakerDetailPage() {
  const { gallery, speakerTalks } = Route.useLoaderData()

  useEffect(() => {
    console.log({
      q: gallery.questions[0],
      a: gallery.answers,
    })
  })
  return (
    <div className="min-h-screen">
      <RemyAssistant />

      {/* Back navigation */}
      <div className="max-w-7xl mx-auto px-6 mt-8">
        <Link
          to="/gallery"
          className="inline-flex items-center gap-2 text-[var(--accent-foreground)] hover:text-gold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-[var(--accent-foreground)] hover:text-copper/80 transition-colors">
            Back to work gallery
          </span>
        </Link>
      </div>

      {/* Hero section */}
      <div className="relative py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Photo */}
            <div className="lg:col-span-1">
              <div className="aspect-square rounded-2xl overflow-hidden border border-border/50">
                <img
                  src={`/${gallery.headshot}`}
                  alt={gallery.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-2 flex flex-col justify-center">
              <h1 className="font-display text-5xl md:text-6xl font-bold text-[var(--accent-foreground)] mb-3">
                {gallery.name}
              </h1>

              <div className="flex items-center gap-2 text-copper/80 text-lg mb-8">
                <MapPin className="w-5 h-5 text-copper" />
                <span>{gallery.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bio section */}
      <div className="py-12 w-full px-2 flex justify-center">
        <div className="prose prose-lg max-w-4xl prose-invert prose-p:text-cream/80 prose-headings:text-cream prose-headings:font-display prose-strong:text-cream prose-a:text-gold font-body text-lg leading-relaxed flex justify-center">
          <Accordion
            type="single"
            collapsible
            defaultValue="shipping"
            className="w-full p-6 bg-gradient-to-br dark:from-card dark:to-charcoal/90 light:from-card/50 light:to-copper/10 border border-copper/30 rounded-lg"
          >
            {gallery.questions.map((q: string, i: number) => (
              <>
                <AccordionItem value={q + i}>
                  <AccordionTrigger className="text-[var(--accent-foreground)] mb-2">
                    {q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[var(--accent-foreground)]">
                    {gallery.answers[i]}
                  </AccordionContent>
                </AccordionItem>
              </>
            ))}
          </Accordion>
        </div>
      </div>

      {/* Speaker's talks */}
      {speakerTalks.length > 0 && (
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="font-display text-3xl font-bold text-cream mb-8">
            Sessions by {gallery.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {speakerTalks.map((talk) => (
              <TalkCard key={talk.slug} talk={talk} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
