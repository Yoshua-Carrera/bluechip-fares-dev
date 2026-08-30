import { createFileRoute } from '@tanstack/react-router'

import { GalleryPage } from '#/components/gallery-page/GalleryPage'

export const Route = createFileRoute('/gallery')({ component: GalleryPage })
