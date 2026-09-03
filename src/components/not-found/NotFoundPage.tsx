import { Footer } from '#/components/footer/Footer'
import { Navbar } from '#/components/navbar/Navbar'
import { NotFoundHero } from './NotFoundHero'
import { NotFoundActions } from './NotFoundActions'

export function NotFoundPage() {
  return (
    <div
      style={{
        background: 'var(--surface-page)',
        color: 'var(--text-body)',
        fontFamily: 'var(--font-body)',
      }}
    >
      <Navbar overPhoto />
      <NotFoundHero />
      <NotFoundActions />

      <Footer />
    </div>
  )
}
