import { createFileRoute } from '@tanstack/react-router'

import { ProjectDetailPage } from '#/components/project-detail-page/ProjectDetailPage'

export const Route = createFileRoute('/projects/$slug')({
  component: RouteComponent,
})

function RouteComponent() {
  const { slug } = Route.useParams()
  return <ProjectDetailPage slug={slug} />
}
