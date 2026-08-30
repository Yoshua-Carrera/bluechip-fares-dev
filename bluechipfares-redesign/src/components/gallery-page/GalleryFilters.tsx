import type {
  GalleryCategory,
  GalleryFilter,
} from '#/components/gallery-page/gallery-content'

interface GalleryFiltersProps {
  filters: Array<GalleryFilter>
  active: GalleryCategory
  onSelect: (id: GalleryCategory) => void
  countLabel: string
}

export function GalleryFilters({
  filters,
  active,
  onSelect,
  countLabel,
}: GalleryFiltersProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: 'var(--space-3)',
        paddingBottom: 'var(--space-6)',
        marginBottom: 'var(--space-8)',
        borderBottom: '1px solid var(--line-hairline)',
      }}
    >
      {filters.map((filter) => {
        const isActive = filter.id === active
        return (
          <button
            key={filter.id}
            type="button"
            onClick={() => onSelect(filter.id)}
            style={{
              padding: '0.45rem 1.05rem',
              borderRadius: 'var(--radius-pill)',
              border: `1px solid ${
                isActive
                  ? 'var(--accent-hairline-strong)'
                  : 'var(--line-hairline)'
              }`,
              background: isActive ? 'var(--hover-surface)' : 'transparent',
              color: isActive ? 'var(--text-accent)' : 'var(--on-panel)',
              fontFamily: 'var(--font-display)',
              fontSize: '0.9375rem',
              cursor: 'pointer',
              transition:
                'color 200ms ease, border-color 200ms ease, background 200ms ease',
            }}
          >
            {filter.label}
          </button>
        )
      })}
      <span
        style={{
          marginLeft: 'auto',
          fontSize: '0.9375rem',
          color: 'var(--on-panel)',
        }}
      >
        {countLabel}
      </span>
    </div>
  )
}
