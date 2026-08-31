import { randomUUID } from 'node:crypto'
import { logger } from './logger'

export interface ApiResponse<T> {
  status: 'SUCCESS' | 'ERROR'
  data: T | null
  message: string | null
}

export const apiOk = <T>(p: { data: T; message: string | null }) =>
  Response.json({
    status: 'SUCCESS',
    data: p.data,
    message: p.message,
  } satisfies ApiResponse<T>)

export const apiFail = <T>(p: { message: string | null; status: number }) =>
  Response.json(
    {
      status: 'ERROR',
      data: null,
      message: p.message,
    } satisfies ApiResponse<T>,
    { status: p.status ?? 500 },
  )

export const apiHandle = async (p: {
  r: Request
  h: () => Promise<Response>
}) => {
  const reqId = randomUUID()
  const start = performance.now()
  const method = p.r.method
  const path = new URL(p.r.url).pathname
  try {
    const res = await p.h()
    logger.info(`[${method} - Success]`, {
      reqId,
      method,
      path,
      status: res.status,
      durationMs: Math.round(performance.now() - start),
    })
    return res
  } catch (e) {
    if (e instanceof Response) {
      logger.error(`[${method} - Fail]`, {
        reqId,
        method,
        path,
        status: 500,
        durationMs: Math.round(performance.now() - start),
      })
      return e
    }
    const message = e instanceof Error ? e.message : 'Something went wrong'
    logger.error(`[${method} - Fail]`, {
      reqId,
      method,
      path,
      status: 500,
      error: message,
      durationMs: Math.round(performance.now() - start),
    })
    return apiFail({ message, status: 500 })
  }
}
