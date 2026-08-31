import { neon } from '@neondatabase/serverless'

let client: ReturnType<typeof neon>

// TODO: Waiting for DB setup

export async function getClient() {
  if (!process.env.VITE_DATABASE_URL) {
    return undefined
  }
  // TODO: Waiting for DB setup

  if (!client) {
    client = neon(process.env.VITE_DATABASE_URL)
  }
  return client
}
