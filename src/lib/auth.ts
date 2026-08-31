import { betterAuth } from 'better-auth'
import { drizzleAdapter } from '@better-auth/drizzle-adapter/relations-v2'
import { tanstackStartCookies } from 'better-auth/tanstack-start'
import db from '../../db'
import * as schema from '../../db/auth-schema'

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg',
    schema,
  }),

  emailAndPassword: {
    enabled: true,
  },

  plugins: [tanstackStartCookies()],

  user: {
    additionalFields: {
      onboardedAt: {
        type: 'date',
        required: false,
        input: false,
      },
    },
  },
})
