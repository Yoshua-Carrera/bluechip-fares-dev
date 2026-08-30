import { createFileRoute } from '@tanstack/react-router'

import { ServicesPage } from '#/components/services-page/ServicesPage'

export const Route = createFileRoute('/services')({ component: ServicesPage })
