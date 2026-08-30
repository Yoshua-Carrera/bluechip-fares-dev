import { m } from '#/paraglide/messages'

export type GalleryCategory =
  | 'all'
  | 'kitchen'
  | 'bath'
  | 'interior'
  | 'outdoor'

export interface GalleryFilter {
  id: GalleryCategory
  label: string
}

export interface GalleryProject {
  slug: string
  name: string
  location: string
  tag: string
  category: Exclude<GalleryCategory, 'all'>
  image: string
}

export function getGalleryFilters(): Array<GalleryFilter> {
  return [
    { id: 'all', label: m.gallery_filter_all() },
    { id: 'kitchen', label: m.gallery_filter_kitchen() },
    { id: 'bath', label: m.gallery_filter_bath() },
    { id: 'interior', label: m.gallery_filter_interior() },
    { id: 'outdoor', label: m.gallery_filter_outdoor() },
  ]
}

export function getGalleryProjects(): Array<GalleryProject> {
  return [
    {
      slug: 'kitchen-remodeling',
      name: m.proj_kitchen_title(),
      location: m.proj_kitchen_location(),
      tag: m.gallery_tag_kitchen(),
      category: 'kitchen',
      image: '/img/gallery-kitchen-remodeling.jpg',
    },
    {
      slug: 'bathroom-remodeling',
      name: m.work_project_2(),
      location: 'Austin, TX',
      tag: m.gallery_tag_bath(),
      category: 'bath',
      image: '/img/gallery-bathroom.jpg',
    },
    {
      slug: 'wood-accent-wall',
      name: m.work_project_3(),
      location: 'Frisco, TX',
      tag: m.gallery_tag_interior(),
      category: 'interior',
      image: '/img/gallery-wood-accent-wall.jpg',
    },
    {
      slug: 'outdoor-lighting',
      name: m.gallery_project_outdoor_lighting(),
      location: 'Prosper, TX',
      tag: m.gallery_tag_outdoor(),
      category: 'outdoor',
      image: '/img/outdoor-deck.jpg',
    },
    {
      slug: 'cabinet-installation',
      name: m.gallery_project_cabinet_installation(),
      location: 'Frisco, TX',
      tag: m.gallery_tag_kitchen(),
      category: 'kitchen',
      image: '/img/gallery-kitchen-remodeling.jpg',
    },
    {
      slug: 'outdoor-tile',
      name: m.gallery_project_outdoor_tile(),
      location: 'Celina, TX',
      tag: m.gallery_tag_outdoor(),
      category: 'outdoor',
      image: '/img/outdoor-tile.jpg',
    },
  ]
}
