import { createFileRoute } from '@tanstack/react-router'
import { chat, maxIterations, toServerSentEventsResponse } from '@tanstack/ai'
import { geminiText } from '@tanstack/ai-gemini'
import type { GeminiTextAdapter } from '@tanstack/ai-gemini'

import {
  getAllGalleries,
  getAllServices,
  getGalleryBySlug,
  getServiceBySlug,
  searchBlueChipContent,
} from '@/lib/conference-tools'

export const Route = createFileRoute('/api/remy-chat')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const requestSignal = request.signal

        if (requestSignal.aborted) {
          return new Response(null, { status: 499 })
        }

        const abortController = new AbortController()

        try {
          const body = await request.json()
          const { messages, galerySlug, serviceSlug } = body

          const SYSTEM_PROMPT = `You are Remy, a friendly and knowledgeable assistant for Bluechip Fares, a premier home services and remodeling company. You are here to help users learn about our services and past projects.

PERSONALITY:
- Speak with a helpful, professional, and friendly tone.
- Be genuinely passionate about helping people improve their homes.
- Knowledgeable about home remodeling, maintenance, and repair.
- Be patient and provide clear, easy-to-understand information.

CAPABILITIES:
1. Use getGalleryBySlug to get detailed information about a specific project from our gallery.
2. Use getServiceBySlug to get detailed information about a specific service we offer.
3. Use getAllGalleries to see our complete portfolio of past projects.
4. Use getAllServices to see all available services we provide.
5. Use searchBlueChipContent to find projects or services matching a topic or keyword.

INSTRUCTIONS:
- When asked about our services (like painting, flooring, or landscaping), use your tools to provide accurate details on what each service includes.
- When asked about our past work, use your tools to share information about our gallery projects. You can answer frequently asked questions about them.
- Help users find the right service for their home improvement needs.
- If a user asks a question about a specific project or service, use the context provided to give a relevant answer.
- Keep responses conversational but informative.
- Encourage users to reach out through our contact page for quotes or to schedule a consultation.

${galerySlug ? `CONTEXT: The user is currently viewing the project with slug "${galerySlug}".` : ''}
${serviceSlug ? `CONTEXT: The user is currently viewing the service with slug "${serviceSlug}".` : ''}

Remember: You are the friendly digital assistant for Bluechip Fares. Your goal is to make it easy for users to understand our offerings and see the quality of our work!`

          // Determine the best available provider
          let provider = 'ollama'
          let model = 'mistral:7b'
          if (process.env.ANTHROPIC_API_KEY) {
            provider = 'anthropic'
            model = 'claude-haiku-4-5'
          } else if (process.env.OPENAI_API_KEY) {
            provider = 'openai'
            model = 'gpt-4o'
          } else if (process.env.GEMINI_API_KEY) {
            provider = 'gemini'
            model = 'gemini-2.0-flash-exp'
          }

          // Adapter factory pattern for multi-vendor support
          const adapterConfig: {
            gemini: () => GeminiTextAdapter<'gemini-2.5-flash'>
          } = {
            gemini: () => geminiText('gemini-2.5-flash'),
          }

          const adapter = adapterConfig[provider as 'gemini']()

          const stream = chat({
            adapter,
            tools: [
              getGalleryBySlug,
              getServiceBySlug,
              getAllGalleries,
              getAllServices,
              searchBlueChipContent,
            ],
            systemPrompts: [SYSTEM_PROMPT],
            agentLoopStrategy: maxIterations(5),
            messages,
            abortController,
          })

          return toServerSentEventsResponse(stream, { abortController })
        } catch (error: any) {
          console.error('Remy chat error:', error)
          if (error.name === 'AbortError' || abortController.signal.aborted) {
            return new Response(null, { status: 499 })
          }
          return new Response(
            JSON.stringify({
              error: 'Failed to process chat request',
              message: error.message,
            }),
            {
              status: 500,
              headers: { 'Content-Type': 'application/json' },
            },
          )
        }
      },
    },
  },
})
