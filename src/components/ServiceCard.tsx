import { Link } from '@tanstack/react-router'

import type { Service } from 'content-collections'

import { Card, CardContent } from '@/components/ui/card'

interface TalkCardProps {
  service: Service
  featured?: boolean
}

export default function ServiceCard({ service, featured = false }: TalkCardProps) {
  return (
    <Link to={'/services-offered'} className="group relative block">
      <Card
        className={`relative overflow-hidden bg-card border-border/50 card-hover
          ${featured ? 'aspect-[16/10]' : 'aspect-[16/9]'}
          hover:border-gold/50`}
      >
        {/* Image */}
        <div className="absolute inset-0">
          <img
            src={`/${service.image}`}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent" />
        </div>

        {/* Content overlay */}
        <CardContent className="absolute bottom-0 left-0 right-0 p-6 z-10">
          <div className="space-y-3">
            {/* Title */}
            <h3 className="font-display text-4xl font-semibold text-cream group-hover:text-copper transition-colors leading-tight">
              {service.title}
            </h3>
          </div>
        </CardContent>

        {/* Decorative accent */}
        <div className="absolute top-4 right-4">
          <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center">
            <span className="text-gold/60 text-xs font-display">✦</span>
          </div>
        </div>
      </Card>
    </Link>
  )
}
