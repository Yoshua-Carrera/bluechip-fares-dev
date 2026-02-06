import { Link, createFileRoute } from '@tanstack/react-router'
import { marked } from 'marked'
import { ArrowLeft, MapPin } from 'lucide-react'

import { allGalleries, allTalks } from 'content-collections'

import RemyAssistant from '@/components/RemyAssistant'
import TalkCard from '@/components/TalkCard'

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

  return (
    <div className="min-h-screen">
      <RemyAssistant />

      {/* Back navigation */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <Link
          to="/gallery"
          className="inline-flex items-center gap-2 text-cream/60 hover:text-gold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>All Speakers</span>
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
              <h1 className="font-display text-5xl md:text-6xl font-bold text-cream mb-3">
                {gallery.name}
              </h1>

              <div className="flex items-center gap-2 text-cream/60 text-lg mb-8">
                <MapPin className="w-5 h-5 text-copper" />
                <span>{gallery.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bio section */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none prose-invert prose-p:text-cream/80 prose-headings:text-cream prose-headings:font-display prose-strong:text-cream prose-a:text-gold font-body text-lg leading-relaxed">
          <div dangerouslySetInnerHTML={{ __html: marked(gallery.content) }} />
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
