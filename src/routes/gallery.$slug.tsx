import { Link, createFileRoute, useNavigate } from '@tanstack/react-router'
import { ArrowLeft, MapPin } from 'lucide-react'
import { allGalleries } from 'content-collections'
import { useEffect } from 'react'
import type { Ref } from 'react'
import RemyAssistant from '@/components/RemyAssistant'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { useIntersectionObserver } from '@/hooks/intersection-observer'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/gallery/$slug')({
  loader: ({ params }) => {
    const gallery = allGalleries.find((g) => g.slug === params.slug)
    if (!gallery) {
      throw new Error('Gallery not found')
    }
    return { gallery }
  },
  component: GalleryDetailPage,
})

function GalleryDetailPage() {
  const { gallery } = Route.useLoaderData()
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>()
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
            <div
              ref={ref as Ref<HTMLDivElement>}
              className={`lg:col-span-1 fade-in ${isVisible ? 'is-visible' : ''}`}
              style={{ transitionDelay: '0.15s' }}
            >
              <div className="aspect-square rounded-2xl overflow-hidden border border-border/50">
                <img
                  src={`/${gallery.headshot}`}
                  alt={gallery.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Info */}
            <div
              ref={ref as Ref<HTMLDivElement>}
              className={`lg:col-span-2 flex flex-col justify-center fade-in ${isVisible ? 'is-visible' : ''}`}
              style={{ transitionDelay: '0.2s' }}
            >
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
      <div
        className={`py-12 w-full px-2 flex justify-center fade-in ${isVisible ? 'is-visible' : ''}`}
        style={{ transitionDelay: '0.30s' }}
      >
        <div className="prose prose-lg w-6xl prose-invert prose-p:text-cream/80 prose-headings:text-cream prose-headings:font-display prose-strong:text-cream prose-a:text-gold font-body text-lg leading-relaxed flex justify-center">
          <Accordion
            type="multiple"
            className="w-full p-6 bg-gradient-to-br dark:from-card/25 dark:to-charcoal/50 light:from-card/5 light:to-copper/5 border border-copper/30 rounded-lg"
          >
            {gallery.questions.map((q: string, i: number) => (
              <>
                <AccordionItem value={q + i}>
                  <AccordionTrigger className="dark:text-cream light:text-black">
                    {q}
                  </AccordionTrigger>
                  <AccordionContent className="pl-4 dark:text-white/90 light:text-black/90">
                    {gallery.answers[i]}
                  </AccordionContent>
                </AccordionItem>
              </>
            ))}
          </Accordion>
        </div>
      </div>
      {/* CTA Section */}
      <section className="py-20 px-6 light:bg-muted/90">
        <div
          ref={ref as Ref<HTMLDivElement>}
          className={`max-w-4xl mx-auto text-center fade-in ${isVisible ? 'is-visible' : ''}`}
        >
          <div className="relative p-12 rounded-3xl bg-gradient-to-br dark:from-card dark:to-charcoal light:from-card/50 light:to-copper/10 border border-border/50 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-copper/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/5 rounded-full blur-3xl" />

            <div className="relative">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mb-4 light:text-[var(--accent-foreground)]">
                Need help with your next <span className="block italic text-copper">project?</span>
              </h2>
              <p className="text-cream/60 text-lg font-body mb-8 max-w-2xl mx-auto light:text-[var(--accent-foreground)]">
                Let’s create a space that fits your life, your style, and your budget.
              </p>
              <div className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-[var(--primary)]/10 text-white text-bold rounded-full border border-copper/70 hover:bg-accent/10 hover:text-white dark:hover:bg-accent/10 light:bg-copper light:hover:bg-copper/90 cursor-pointer">
                <Button
                  variant={'ghost'}
                  className="hover:bg-transparent hover:text-white dark:hover:bg-transparent cursor-pointer"
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
  )
}
