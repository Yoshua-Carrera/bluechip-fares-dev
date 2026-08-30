import { Footer } from '#/components/footer/Footer'
import { GalleryCTA } from '#/components/gallery-page/GalleryCTA'
import { GalleryGrid } from '#/components/gallery-page/GalleryGrid'
import { GalleryHero } from '#/components/gallery-page/GalleryHero'
import { Navbar } from '#/components/navbar/Navbar'

export function GalleryPage() {
  return (
    <div
      style={{
        background: 'var(--surface-page)',
        color: 'var(--text-body)',
        fontFamily: 'var(--font-body)',
      }}
    >
      <Navbar overPhoto activeHref="/gallery" />
      <GalleryHero />
      <GalleryGrid />
      <GalleryCTA />
      <Footer />
    </div>
  )
}
