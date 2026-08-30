import { Footer } from '#/components/footer/Footer'
import { Navbar } from '#/components/navbar/Navbar'
import { ProjectDetail } from '#/components/project-detail-page/ProjectDetail'
import { ProjectNotFound } from '#/components/project-detail-page/ProjectNotFound'
import { getProject } from '#/components/project-detail-page/project-content'

interface ProjectDetailPageProps {
  slug: string
}

export function ProjectDetailPage({ slug }: ProjectDetailPageProps) {
  const project = getProject(slug)

  return (
    <div
      style={{
        background: 'var(--surface-page)',
        color: 'var(--text-body)',
        fontFamily: 'var(--font-body)',
      }}
    >
      <Navbar overPhoto={project !== undefined} activeHref="/gallery" />
      {project ? (
        <ProjectDetail project={project} />
      ) : (
        <ProjectNotFound slug={slug} />
      )}
      <Footer />
    </div>
  )
}
