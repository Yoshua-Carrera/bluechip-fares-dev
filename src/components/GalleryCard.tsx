import { Link } from '@tanstack/react-router'
import { MapPin } from 'lucide-react'

import type { Ref } from 'react'
import type { Gallery } from 'content-collections'

import { Card, CardContent } from '@/components/ui/card'
import { useIntersectionObserver } from '@/hooks/intersection-observer'

interface GalleryCardProps {
  gallery: Gallery
  featured?: boolean
  index?: number
}

export default function GalleryCard({ gallery, featured = false, index = 0 }: GalleryCardProps) {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>()

  return (
    <Link to={'/gallery/$slug'} params={{ slug: gallery.slug }} className="group relative block">
      <Card
        ref={ref as Ref<HTMLDivElement>}
        className={`relative overflow-hidden bg-card border-border/50 card-hover
          ${featured ? 'aspect-square' : 'aspect-square'}
          hover:border-[var(--primary)] fade-in ${isVisible ? 'is-visible' : ''}`}
        style={{ transitionDelay: `${index * 0.15}s` }}
      >
        {/* Headshot */}
        <div className="absolute inset-0">
          <img
            src={`/${gallery.headshot}`}
            alt={gallery.name}
            className={`w-full h-full object-cover`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
        </div>

        {/* Content overlay */}
        <CardContent className="absolute bottom-0 left-0 right-0 p-6 z-10">
          <div className="space-y-2">
            {/* Name */}
            <h3 className="font-display text-2xl font-semibold text-cream group-hover:text-copper transition-colors">
              {gallery.name}
            </h3>

            {/* Location */}
            <div className="flex items-center gap-2 text-cream/50 text-sm">
              <MapPin className="w-3.5 h-3.5" />
              <span>{gallery.location}</span>
            </div>
          </div>
        </CardContent>

        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
          <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-[var(--primary)}/20 to-transparent transform rotate-45 translate-x-14 -translate-y-14" />
        </div>
      </Card>
    </Link>
  )
}
