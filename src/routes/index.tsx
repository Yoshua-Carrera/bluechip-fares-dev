import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, Calendar, MapPin, Users } from 'lucide-react'

import { allSpeakers, allTalks } from 'content-collections'
import { format } from 'date-fns'

import SpeakerCard from '@/components/SpeakerCard'
import TalkCard from '@/components/TalkCard'
import RemyAssistant from '@/components/RemyAssistant'
import HeroCarousel from '@/components/HeroCarousel'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  const featuredSpeakers = allSpeakers.slice(0, 3)
  const featuredTalks = allTalks.slice(0, 4)

  return (
    <>
      <RemyAssistant />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">
        {/* Background carousel */}
        <HeroCarousel />

        <div className="relative max-w-5xl mx-auto text-center z-10 mt-5">
          {/* Event date badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-black/20 border border-white/70 text-white text-sm font-medium">
            <Calendar className="w-4 h-4" />
            <span>{format(Date.now(), 'MMMM/dd/yyyy')}</span>
            <span className="mx-2 text-white/40">•</span>
            <MapPin className="w-4 h-4" />
            <span>Frisco, TX</span>
          </div>

          {/* Main title */}
          <h1 className="font-display text-6xl md:text-8xl font-bold text-cream mb-6 leading-tight">
            Bluechip
            <span className="block italic text-copper">Fares</span>
          </h1>

          <p className="text-xl md:text-2xl text-cream/90 font-semi-bold max-w-3xl mx-auto mb-10 leading-relaxed">
            Family-owned in Frisco, TX – fixing homes, building trust, one project at a time.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-display font-bold text-white">{allSpeakers.length}</div>
              <div className="text-cream/85 text-sm uppercase tracking-wider">Contractors</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-display font-bold text-white">{allTalks.length}</div>
              <div className="text-cream/85 text-sm uppercase tracking-wider">Hours a day</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-display font-bold text-white">7</div>
              <div className="text-cream/85 text-sm uppercase tracking-wider">Days a week</div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-5">
            <Link
              to="/speakers"
              className="inline-flex items-center gap-2 px-8 py-4 border-4 border-copper/25 rounded-full bg-gradient-to-r from-white to-white text-charcoal font-semibold text-lg transition-all hover:shadow-lg hover:shadow-[var(--primary)]/30 hover:scale-[1.02]"
            >
              <Users className="w-5 h-5" />
              Look at our work
            </Link>
            <Link
              to="/talks"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-4 border-copper/50 text-white font-semibold text-lg transition-all hover:bg-[var(--primary)]/10 hover:border-[var(--primary)]"
            >
              Service catalog
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Speakers Section */}
      <section className="py-20 px-6 bg-muted/75">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--accent-foreground)] mb-3">
                Featured <span className="text-copper italic">Associates</span>
              </h2>
              <p className="text-[var(--accent-foreground)] text-xl font-body">
                Learn from award-winning contractors and master associates
              </p>
            </div>
            <Link
              to="/speakers"
              className="hidden md:inline-flex items-center gap-2 text-[var(--accent-foreground)] hover:text-copper/80 transition-colors font-medium"
            >
              View all speakers
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredSpeakers.map((speaker) => (
              <SpeakerCard key={speaker.slug} speaker={speaker} featured />
            ))}
          </div>

          <div className="md:hidden mt-8 text-center">
            <Link
              to="/speakers"
              className="inline-flex items-center gap-2 text-[var(--primary)] hover:text-white/80 transition-colors font-bold"
            >
              View all speakers
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* Featured Sessions Section */}
      <section className="py-20 px-6 bg-muted/75">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--accent-foreground)] mb-3">
                Featured <span className="text-copper italic">work</span>
              </h2>
              <p className="text-[var(--accent-foreground)] text-xl font-body">
                Masterclasses and demonstrations to elevate your home
              </p>
            </div>
            <Link
              to="/talks"
              className="hidden md:inline-flex items-center gap-2 text-[var(--accent-foreground)] hover:text-copper/80 transition-colors font-medium"
            >
              View all sessions
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredTalks.map((talk) => (
              <TalkCard key={talk.slug} talk={talk} featured />
            ))}
          </div>

          <div className="md:hidden mt-8 text-center">
            <Link
              to="/talks"
              className="inline-flex items-center gap-2 text-gold hover:text-gold/80 transition-colors font-medium"
            >
              View all sessions
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <hr />

      {/* CTA Section */}
      <section className="py-20 px-6 light:bg-muted/90">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative p-12 rounded-3xl bg-gradient-to-br dark:from-card dark:to-charcoal light:from-foreground light:to-primary border border-border/50 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-copper/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/5 rounded-full blur-3xl" />

            <div className="relative">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mb-4">
                Ready to Elevate Your Craft?
              </h2>
              <p className="text-cream/60 text-lg font-body mb-8 max-w-2xl mx-auto">
                Join us in Paris for an unforgettable experience with the world's finest pastry
                artisans.
              </p>
              <div className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-[var(--primary)]/10 text-white text-bold rounded-full border border-copper/70">
                <span>🥐</span>
                <span>Registration opens January 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
