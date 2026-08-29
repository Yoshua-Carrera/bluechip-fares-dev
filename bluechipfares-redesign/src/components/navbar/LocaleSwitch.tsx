import { getLocale, locales, localizeUrl, setLocale } from '#/paraglide/runtime'

interface LocaleSwitchProps {
  tone?: 'on-photo' | 'on-chrome'
}

export function LocaleSwitch({ tone = 'on-chrome' }: LocaleSwitchProps) {
  const currentLocale = getLocale()
  const otherLocale = locales.find((locale) => locale !== currentLocale)
  const onPhoto = tone === 'on-photo'

  const line = onPhoto ? 'var(--line-on-photo)' : 'var(--line-hairline)'
  const muted = onPhoto
    ? 'var(--on-photo-muted)'
    : 'var(--chrome-foreground-muted)'
  const base = onPhoto ? 'var(--on-photo)' : 'var(--chrome-foreground)'
  const active = onPhoto ? 'var(--copper-light)' : 'var(--text-accent)'

  console.log('locale:', getLocale())
  console.log('localized:', localizeUrl(window.location.href))
  console.log(
    'localized tr:',
    localizeUrl(window.location.href, { locale: 'tr' }),
  )

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.35rem',
        padding: '0.25rem 0.5rem',
        border: `1px solid ${line}`,
        borderRadius: 'var(--radius-pill)',
        opacity: 0.85,
      }}
    >
      {locales.map((locale, idx) => (
        <div key={locale} style={{ display: 'flex', alignItems: 'center' }}>
          {idx > 0 && (
            <span style={{ color: muted, fontSize: '0.7rem' }}>/</span>
          )}
          <button
            type="button"
            onClick={() => otherLocale && setLocale(otherLocale)}
            style={{
              border: 0,
              background: 'none',
              cursor: 'pointer',
              fontFamily: 'var(--font-display)',
              fontSize: '0.75rem',
              letterSpacing: 'var(--tracking-wider)',
              color: locale === currentLocale ? active : base,
              padding: '0.1rem 0.4rem',
            }}
          >
            {locale.toUpperCase()}
          </button>
        </div>
      ))}
    </div>
  )
}
