// content-collections.ts
import { defineCollection, defineConfig } from '@content-collections/core'
import { z } from 'zod'
var gallery = defineCollection({
  name: 'gallery',
  directory: 'content/gallery',
  include: '**/*.md',
  schema: z.object({
    name: z.string(),
    location: z.string(),
    headshot: z.string(),
    content: z.string(),
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
var talks = defineCollection({
  name: 'talks',
  directory: 'content/talks',
  include: '**/*.md',
  schema: z.object({
    title: z.string(),
    speaker: z.string(),
    duration: z.string(),
    image: z.string(),
    topics: z.array(z.string()),
    content: z.string(),
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
var content_collections_default = defineConfig({
  collections: [gallery, talks],
})
export { content_collections_default as default }
