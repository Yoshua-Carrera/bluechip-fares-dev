import { useMemo, useState } from 'react'
import type { Ref } from 'react'

import { GalleryCard } from '#/components/gallery-page/GalleryCard'
import { GalleryFilters } from '#/components/gallery-page/GalleryFilters'
import type { GalleryCategory } from '#/components/gallery-page/gallery-content'
import {
  getGalleryFilters,
  getGalleryProjects,
} from '#/components/gallery-page/gallery-content'
import { m } from '#/paraglide/messages'
import { useIntersectionObserver } from '#/context/intersection-observer'

export function GalleryGrid() {
  const filters = getGalleryFilters()
  const projects = getGalleryProjects()
  const [active, setActive] = useState<GalleryCategory>('all')
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>()

  const visible = useMemo(
    () =>
      active === 'all'
        ? projects
        : projects.filter((p) => p.category === active),
    [projects, active],
  )

  const countLabel =
    visible.length === 1
      ? m.gallery_count_singular({ count: visible.length })
      : m.gallery_count_plural({ count: visible.length })

  return (
    <section
      ref={ref as Ref<HTMLDivElement>}
      style={{
        padding:
          'clamp(2.5rem, 6vw, 4rem) clamp(1.5rem, 4vw, 3rem) clamp(3.5rem, 8vw, 6rem)',
      }}
    >
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <GalleryFilters
          filters={filters}
          active={active}
          onSelect={setActive}
          countLabel={countLabel}
        />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(20rem, 1fr))',
            gap: 'var(--grid-gap)',
          }}
        >
          {visible.map((project, index) => (
            <GalleryCard
              className={`fade-in ${isVisible ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${index * 0.15}s` }}
              key={project.slug}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
