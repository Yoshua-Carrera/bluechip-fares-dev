import { m } from '#/paraglide/messages'

export interface ProjectFact {
  label: string
  value: string
}

export interface ProjectQA {
  question: string
  answer: string
}

export interface ProjectImages {
  hero: string
  main: string
  side1: string
  side2: string
}

export interface ProjectEntry {
  slug: string
  tag: string
  location: string
  title: string
  aboutBody: string
  facts: Array<ProjectFact>
  qa: Array<ProjectQA>
  images: ProjectImages
}

const PROJECT_FACTORIES: Record<string, () => ProjectEntry> = {
  'kitchen-remodeling': () => ({
    slug: 'kitchen-remodeling',
    tag: m.proj_kitchen_tag(),
    location: m.proj_kitchen_location(),
    title: m.proj_kitchen_title(),
    aboutBody: m.proj_kitchen_about_body(),
    facts: [
      {
        label: m.project_fact_location(),
        value: m.proj_kitchen_fact_location_value(),
      },
      {
        label: m.project_fact_scope(),
        value: m.proj_kitchen_fact_scope_value(),
      },
      {
        label: m.project_fact_timeline(),
        value: m.proj_kitchen_fact_timeline_value(),
      },
    ],
    qa: [
      { question: m.proj_kitchen_qa_1_q(), answer: m.proj_kitchen_qa_1_a() },
      { question: m.proj_kitchen_qa_2_q(), answer: m.proj_kitchen_qa_2_a() },
      { question: m.proj_kitchen_qa_3_q(), answer: m.proj_kitchen_qa_3_a() },
    ],
    images: {
      hero: '/img/gallery-kitchen-remodeling.jpg',
      main: '/img/gallery-kitchen-remodeling.jpg',
      side1: '/img/gallery-wood-accent-wall.jpg',
      side2: '/img/gallery-bathroom.jpg',
    },
  }),
  'bathroom-remodeling': () => ({
    slug: 'bathroom-remodeling',
    tag: m.proj_bathroom_tag(),
    location: m.proj_bathroom_location(),
    title: m.proj_bathroom_title(),
    aboutBody: m.proj_bathroom_about_body(),
    facts: [
      {
        label: m.project_fact_location(),
        value: m.proj_bathroom_fact_location_value(),
      },
      {
        label: m.project_fact_scope(),
        value: m.proj_bathroom_fact_scope_value(),
      },
      {
        label: m.project_fact_timeline(),
        value: m.proj_bathroom_fact_timeline_value(),
      },
    ],
    qa: [
      { question: m.proj_bathroom_qa_1_q(), answer: m.proj_bathroom_qa_1_a() },
      { question: m.proj_bathroom_qa_2_q(), answer: m.proj_bathroom_qa_2_a() },
      { question: m.proj_bathroom_qa_3_q(), answer: m.proj_bathroom_qa_3_a() },
    ],
    images: {
      hero: '/img/gallery-bathroom.jpg',
      main: '/img/gallery-bathroom.jpg',
      side1: '/img/gallery-wood-accent-wall.jpg',
      side2: '/img/gallery-kitchen-remodeling.jpg',
    },
  }),
  'wood-accent-wall': () => ({
    slug: 'wood-accent-wall',
    tag: m.proj_wood_tag(),
    location: m.proj_wood_location(),
    title: m.proj_wood_title(),
    aboutBody: m.proj_wood_about_body(),
    facts: [
      {
        label: m.project_fact_location(),
        value: m.proj_wood_fact_location_value(),
      },
      {
        label: m.project_fact_scope(),
        value: m.proj_wood_fact_scope_value(),
      },
      {
        label: m.project_fact_timeline(),
        value: m.proj_wood_fact_timeline_value(),
      },
    ],
    qa: [
      { question: m.proj_wood_qa_1_q(), answer: m.proj_wood_qa_1_a() },
      { question: m.proj_wood_qa_2_q(), answer: m.proj_wood_qa_2_a() },
      { question: m.proj_wood_qa_3_q(), answer: m.proj_wood_qa_3_a() },
    ],
    images: {
      hero: '/img/gallery-wood-accent-wall.jpg',
      main: '/img/gallery-wood-accent-wall.jpg',
      side1: '/img/gallery-bathroom.jpg',
      side2: '/img/gallery-kitchen-remodeling.jpg',
    },
  }),
  'outdoor-lighting': () => ({
    slug: 'outdoor-lighting',
    tag: m.proj_lighting_tag(),
    location: m.proj_lighting_location(),
    title: m.proj_lighting_title(),
    aboutBody: m.proj_lighting_about_body(),
    facts: [
      {
        label: m.project_fact_location(),
        value: m.proj_lighting_fact_location_value(),
      },
      {
        label: m.project_fact_scope(),
        value: m.proj_lighting_fact_scope_value(),
      },
      {
        label: m.project_fact_timeline(),
        value: m.proj_lighting_fact_timeline_value(),
      },
    ],
    qa: [
      { question: m.proj_lighting_qa_1_q(), answer: m.proj_lighting_qa_1_a() },
      { question: m.proj_lighting_qa_2_q(), answer: m.proj_lighting_qa_2_a() },
      { question: m.proj_lighting_qa_3_q(), answer: m.proj_lighting_qa_3_a() },
    ],
    images: {
      hero: '/img/hero-bg-5.jpg',
      main: '/img/hero-bg-5.jpg',
      side1: '/img/gallery-wood-accent-wall.jpg',
      side2: '/img/gallery-bathroom.jpg',
    },
  }),
  'cabinet-installation': () => ({
    slug: 'cabinet-installation',
    tag: m.proj_cabinet_tag(),
    location: m.proj_cabinet_location(),
    title: m.proj_cabinet_title(),
    aboutBody: m.proj_cabinet_about_body(),
    facts: [
      {
        label: m.project_fact_location(),
        value: m.proj_cabinet_fact_location_value(),
      },
      {
        label: m.project_fact_scope(),
        value: m.proj_cabinet_fact_scope_value(),
      },
      {
        label: m.project_fact_timeline(),
        value: m.proj_cabinet_fact_timeline_value(),
      },
    ],
    qa: [
      { question: m.proj_cabinet_qa_1_q(), answer: m.proj_cabinet_qa_1_a() },
      { question: m.proj_cabinet_qa_2_q(), answer: m.proj_cabinet_qa_2_a() },
      { question: m.proj_cabinet_qa_3_q(), answer: m.proj_cabinet_qa_3_a() },
    ],
    images: {
      hero: '/img/gallery-kitchen-remodeling.jpg',
      main: '/img/gallery-kitchen-remodeling.jpg',
      side1: '/img/gallery-wood-accent-wall.jpg',
      side2: '/img/gallery-bathroom.jpg',
    },
  }),
  'outdoor-tile': () => ({
    slug: 'outdoor-tile',
    tag: m.proj_tile_tag(),
    location: m.proj_tile_location(),
    title: m.proj_tile_title(),
    aboutBody: m.proj_tile_about_body(),
    facts: [
      {
        label: m.project_fact_location(),
        value: m.proj_tile_fact_location_value(),
      },
      {
        label: m.project_fact_scope(),
        value: m.proj_tile_fact_scope_value(),
      },
      {
        label: m.project_fact_timeline(),
        value: m.proj_tile_fact_timeline_value(),
      },
    ],
    qa: [
      { question: m.proj_tile_qa_1_q(), answer: m.proj_tile_qa_1_a() },
      { question: m.proj_tile_qa_2_q(), answer: m.proj_tile_qa_2_a() },
      { question: m.proj_tile_qa_3_q(), answer: m.proj_tile_qa_3_a() },
    ],
    images: {
      hero: '/img/hero-bg-5.jpg',
      main: '/img/hero-bg-5.jpg',
      side1: '/img/gallery-bathroom.jpg',
      side2: '/img/gallery-wood-accent-wall.jpg',
    },
  }),
}

export function getProject(slug: string): ProjectEntry | undefined {
  const factory = PROJECT_FACTORIES[slug]
  return factory ? factory() : undefined
}
