import { toolDefinition } from '@tanstack/ai'
import { z } from 'zod'

import { allGalleries, allTalks } from 'content-collections'

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

// Tool definition for getting a talk by slug
export const getTalkBySlugToolDef = toolDefinition({
  name: 'getTalkBySlug',
  description:
    'Get the full details of a specific session/talk. Use this when asked about a particular session.',
  inputSchema: z.object({
    slug: z.string().describe('The slug of the talk'),
  }),
  outputSchema: z.object({
    title: z.string(),
    speaker: z.string(),
    duration: z.string(),
    topics: z.array(z.string()),
    description: z.string(),
  }),
})

// Server implementation
export const getTalkBySlug = getTalkBySlugToolDef.server(({ slug }) => {
  const talk = allTalks.find((t) => t.slug === slug)
  if (!talk) {
    return {
      title: 'Session not found',
      speaker: '',
      duration: '',
      topics: [],
      description: 'The requested session was not found.',
    }
  }
  return {
    title: talk.title,
    speaker: talk.speaker,
    duration: talk.duration,
    topics: talk.topics,
    description: talk.content,
  }
})

// Tool definition for listing all galleries
export const getAllGalleriesToolDef = toolDefinition({
  name: 'getAllGalleries',
  description:
    'Get a list of all galleries at the conference with their names, specialties, and restaurants.',
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

// Tool definition for listing all talks
export const getAllTalksToolDef = toolDefinition({
  name: 'getAllTalks',
  description:
    'Get a list of all sessions/talks at the conference with their titles, speakers, and topics.',
  inputSchema: z.object({}),
  outputSchema: z.array(
    z.object({
      slug: z.string(),
      title: z.string(),
      speaker: z.string(),
      duration: z.string(),
      topics: z.array(z.string()),
    }),
  ),
})

// Server implementation
export const getAllTalks = getAllTalksToolDef.server(() => {
  return allTalks.map((talk) => ({
    slug: talk.slug,
    title: talk.title,
    speaker: talk.speaker,
    duration: talk.duration,
    topics: talk.topics,
  }))
})

// Tool definition for searching conference content
export const searchConferenceToolDef = toolDefinition({
  name: 'searchConference',
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
    talks: z.array(
      z.object({
        slug: z.string(),
        title: z.string(),
        speaker: z.string(),
        topics: z.array(z.string()),
      }),
    ),
  }),
})

// Server implementation
export const searchConference = searchConferenceToolDef.server(({ query }) => {
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

  const matchingTalks = allTalks
    .filter(
      (talk) =>
        talk.title.toLowerCase().includes(queryLower) ||
        talk.speaker.toLowerCase().includes(queryLower) ||
        talk.topics.some((topic) => topic.toLowerCase().includes(queryLower)) ||
        talk.content.toLowerCase().includes(queryLower),
    )
    .map((talk) => ({
      slug: talk.slug,
      title: talk.title,
      speaker: talk.speaker,
      topics: talk.topics,
    }))

  return {
    galleries: matchingGalleries,
    talks: matchingTalks,
  }
})
