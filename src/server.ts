import { createStartHandler, defaultStreamHandler } from '@tanstack/react-start/server'
import { paraglideMiddleware } from '#/paraglide/server.js'

const fetch = createStartHandler({
  handler: defaultStreamHandler,
})

export default {
  fetch(request: Request) {
    // TanStack Router owns URL rewriting via router.tsx's rewrite config,
    // so pass the original request through untouched.
    return paraglideMiddleware(request, () => fetch(request))
  },
}
