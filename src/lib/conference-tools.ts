import { toolDefinition } from '@tanstack/ai'
import { z } from 'zod'

import { allGalleries, allServices } from 'content-collections'

// Tool definition for getting a speaker by slug
export const getGalleryBySlugToolDef = toolDefinition({
  name: 'getGalleryBySlug',
  description:
    'Get the full profile and bio of a specific gallery. Use this when asked about a particular gallery.',
  inputSchema: z.object({
    slug: z.string().describe('The slug of the gallery'),
  }),
  outputSchema: z.object({
    name: z.string(),
    location: z.string(),
    bio: z.string(),
  }),
})

// Server implementation
export const getGalleryBySlug = getGalleryBySlugToolDef.server(({ slug }) => {
  const gallery = allGalleries.find((g) => g.slug === slug)
  if (!gallery) {
    return {
      name: 'Gallery not found',
      location: '',
      bio: 'The requested gallery was not found.',
    }
  }
  return {
    name: gallery.name,
    location: gallery.location,
    bio: gallery.content,
  }
})

// Tool definition for getting a service by slug
export const getServiceBySlugToolDef = toolDefinition({
  name: 'getServiceBySlug',
  description: 'Get the full details of a specific service offered.',
  inputSchema: z.object({
    slug: z.string().describe('The slug of the service'),
  }),
  outputSchema: z.object({
    title: z.string(),
    image: z.string(),
    services: z.array(z.string()),
    serviceDescriptions: z.array(z.string()),
  }),
})

// Server implementation
export const getServiceBySlug = getServiceBySlugToolDef.server(({ slug }) => {
  const service = allServices.find((s) => s.slug === slug)
  if (!service) {
    return {
      title: 'Service not found',
      image: '',
      services: [],
      serviceDescriptions: [],
    }
  }
  return {
    title: service.title,
    image: service.image,
    services: service.services,
    serviceDescriptions: service.serviceDescriptions,
  }
})

// Tool definition for listing all galleries
export const getAllGalleriesToolDef = toolDefinition({
  name: 'getAllGalleries',
  description:
    'Get a list of all galleries at Bluechip with their names, specialties, and restaurants.',
  inputSchema: z.object({}),
  outputSchema: z.array(
    z.object({
      slug: z.string(),
      name: z.string(),
      location: z.string(),
    }),
  ),
})

// Server implementation
export const getAllGalleries = getAllGalleriesToolDef.server(() => {
  return allGalleries.map((gallery) => ({
    slug: gallery.slug,
    name: gallery.name,
    location: gallery.location,
  }))
})

// Tool definition for listing all services
export const getAllServicesToolDef = toolDefinition({
  name: 'getAllServices',
  description: 'Get a list of all services/galleries owned by Bluchip.',
  inputSchema: z.object({}),
  outputSchema: z.array(
    z.object({
      title: z.string(),
      image: z.string(),
      services: z.array(z.string()),
      serviceDescriptions: z.array(z.string()),
    }),
  ),
})

// Server implementation
export const getAllServices = getAllServicesToolDef.server(() => {
  return allServices.map((service) => ({
    slug: service.slug,
    title: service.title,
    image: service.image,
    services: service.services,
    serviceDescriptions: service.serviceDescriptions,
  }))
})

// Tool definition for searching Bluechip content
export const searchBlueChipContentToolDef = toolDefinition({
  name: 'searchBlueChipContent',
  description:
    'Search for galleries or sessions by keyword. Use this to find content matching user queries about topics, techniques, or names.',
  inputSchema: z.object({
    query: z.string().describe('The search query'),
  }),
  outputSchema: z.object({
    galleries: z.array(
      z.object({
        slug: z.string(),
        name: z.string(),
      }),
    ),
    services: z.array(
      z.object({
        slug: z.string(),
        title: z.string(),
        image: z.string(),
        services: z.array(z.string()),
        serviceDescriptions: z.array(z.string()),
      }),
    ),
  }),
})

// Server implementation
export const searchBlueChipContent = searchBlueChipContentToolDef.server(({ query }) => {
  const queryLower = query.toLowerCase()

  const matchingGalleries = allGalleries
    .filter(
      (gallery) =>
        gallery.name.toLowerCase().includes(queryLower) ||
        gallery.content.toLowerCase().includes(queryLower),
    )
    .map((gallery) => ({
      slug: gallery.slug,
      name: gallery.name,
    }))

  const matchingServices = allServices
    .filter(
      (service) =>
        service.title.toLowerCase().includes(queryLower) ||
        service.image.toLowerCase().includes(queryLower) ||
        service.services.some((topic) => topic.toLowerCase().includes(queryLower)) ||
        service.serviceDescriptions.some((topic) => topic.toLowerCase().includes(queryLower)),
    )
    .map((service) => ({
      slug: service.slug,
      title: service.title,
      image: service.image,
      services: service.services,
      serviceDescriptions: service.serviceDescriptions,
    }))

  return {
    galleries: matchingGalleries,
    services: matchingServices,
  }
})
