import { FeaturedWorkCard } from '#/components/featured-work-card/FeaturedWorkCard'
import { SectionHeader } from '#/components/landing-page/SectionHeader'
import { m } from '#/paraglide/messages'

export function FeaturedWork() {
  return (
    <section
      style={{
        padding: 'clamp(3.5rem, 8vw, 6rem) clamp(1.5rem, 4vw, 3rem)',
        background: 'var(--surface-page)',
      }}
    >
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <SectionHeader
          lead={m.work_lead()}
          accent={m.work_accent()}
          description={m.work_desc()}
          linkLabel={m.work_view_all()}
          linkHref="/gallery"
        />

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'stretch',
            gap: 'var(--grid-gap)',
          }}
        >
          <div style={{ flex: '2 1 26rem', minHeight: '26rem' }}>
            <FeaturedWorkCard
              image="/img/gallery-kitchen-remodeling.jpg"
              alt={m.work_project_1()}
              title={m.work_project_1()}
              subtitle={m.work_project_1_loc()}
              href="/projects/kitchen-remodeling"
              size="lg"
            />
          </div>
          <div
            style={{
              flex: '1 1 17rem',
              display: 'grid',
              gridAutoRows: '1fr',
              gap: 'var(--grid-gap)',
            }}
          >
            <FeaturedWorkCard
              image="/img/gallery-bathroom.jpg"
              alt={m.work_project_2()}
              title={m.work_project_2()}
              href="/projects/bathroom-remodeling"
            />
            <FeaturedWorkCard
              image="/img/gallery-wood-accent-wall.jpg"
              alt={m.work_project_3()}
              title={m.work_project_3()}
              href="/projects/wood-accent-wall"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
