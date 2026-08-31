import type { ProjectEntry } from '#/components/project-detail-page/project-content'
import { ProjectFooterNav } from '#/components/project-detail-page/ProjectFooterNav'
import { ProjectHero } from '#/components/project-detail-page/ProjectHero'
import { ProjectOverview } from '#/components/project-detail-page/ProjectOverview'
import { ProjectQA } from '#/components/project-detail-page/ProjectQA'

interface ProjectDetailProps {
  project: ProjectEntry
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <>
      <ProjectHero
        image={project.images.hero}
        tag={project.tag}
        location={project.location}
        title={project.title}
      />
      <ProjectOverview
        aboutBody={project.aboutBody}
        facts={project.facts}
        images={project.images}
      />
      <ProjectQA items={project.qa} />
      <ProjectFooterNav />
    </>
  )
}
