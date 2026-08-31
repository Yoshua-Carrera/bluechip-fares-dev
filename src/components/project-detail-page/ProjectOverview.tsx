import type {
  ProjectFact,
  ProjectImages,
} from '#/components/project-detail-page/project-content'
import { m } from '#/paraglide/messages'

interface ProjectOverviewProps {
  aboutBody: string
  facts: Array<ProjectFact>
  images: ProjectImages
}

export function ProjectOverview({
  aboutBody,
  facts,
  images,
}: ProjectOverviewProps) {
  return (
    <section
      style={{
        padding: 'clamp(3rem, 7vw, 5rem) clamp(1.5rem, 4vw, 3rem)',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--container-max)',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(18rem, 1fr))',
          gap: 'clamp(2rem, 5vw, 4rem)',
          alignItems: 'start',
        }}
      >
        <div>
          <h2
            style={{
              margin: '0 0 var(--space-5)',
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
              fontWeight: 'var(--weight-bold)',
              color: 'var(--text-heading)',
              lineHeight: 1.15,
            }}
          >
            {m.project_about_lead()}{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--text-accent)' }}>
              {m.project_about_accent()}
            </span>
          </h2>
          <p
            style={{
              margin: '0 0 var(--space-8)',
              maxWidth: '30rem',
              fontSize: '1.1875rem',
              lineHeight: 'var(--leading-relaxed)',
              color: 'var(--text-body)',
            }}
          >
            {aboutBody}
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(9rem, 1fr))',
              gap: 'var(--space-6)',
              paddingTop: 'var(--space-6)',
              borderTop: '1px solid var(--line-hairline)',
            }}
          >
            {facts.map((fact) => (
              <div key={fact.label}>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.7rem',
                    letterSpacing: 'var(--tracking-wider)',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                  }}
                >
                  {fact.label}
                </div>
                <div
                  style={{
                    marginTop: '0.35rem',
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.25rem',
                    fontWeight: 'var(--weight-semibold)',
                    color: 'var(--text-heading)',
                  }}
                >
                  {fact.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gap: 'var(--space-4)' }}>
          <div
            style={{
              aspectRatio: '4 / 3',
              borderRadius: 'var(--radius-2xl)',
              overflow: 'hidden',
              border: '1px solid var(--line-hairline)',
            }}
          >
            <img
              src={images.main}
              alt=""
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'var(--space-4)',
            }}
          >
            {[images.side1, images.side2].map((src, i) => (
              <div
                key={`${src}-${i}`}
                style={{
                  aspectRatio: '1 / 1',
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  border: '1px solid var(--line-hairline)',
                }}
              >
                <img
                  src={src}
                  alt=""
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
