import { createChatClientOptions, fetchServerSentEvents, useChat } from '@tanstack/ai-react'
import type { InferChatMessages } from '@tanstack/ai-react'

// Default chat options for type inference
const defaultChatOptions = createChatClientOptions({
  connection: fetchServerSentEvents('/api/remy-chat'),
})

export type BluechipChatMessages = InferChatMessages<typeof defaultChatOptions>

export const useConferenceChat = (gallerySlug?: string, serviceSlug?: string) => {
  const chatOptions = createChatClientOptions({
    connection: fetchServerSentEvents('/api/remy-chat', {
      body: {
        gallerySlug,
        serviceSlug,
      },
    }),
  })

  return useChat(chatOptions)
}
