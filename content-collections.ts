import { defineCollection, defineConfig } from '@content-collections/core'
import { z } from 'zod'

const gallery = defineCollection({
  name: 'gallery',
  directory: 'content/gallery',
  include: '**/*.md',
  schema: z.object({
    name: z.string(),
    location: z.string(),
    headshot: z.string(),
    content: z.string(),
    questions: z.array(z.string()),
    answers: z.array(z.string()),
  }),
  transform: async (doc) => {
    return {
      ...doc,
      slug: doc.name
        .toLowerCase()
        .replace(/[^\w-]+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, ''),
    }
  },
})

const services = defineCollection({
  name: 'services',
  directory: 'content/services',
  include: '**/*.md',
  schema: z.object({
    title: z.string(),
    image: z.string(),
    services: z.array(z.string()),
    serviceDescriptions: z.array(z.string()),
  }),
  transform: async (doc) => {
    return {
      ...doc,
      slug: doc.title
        .toLowerCase()
        .replace(/[^\w-]+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, ''),
    }
  },
})

export default defineConfig({
  collections: [gallery, services],
})
