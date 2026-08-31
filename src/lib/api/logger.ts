type Level = 'info' | 'debug' | 'warn' | 'error'
type Fields = Record<string, unknown>

const emit = (level: Level, message: string, fields: Fields) => {
  const ts = new Date().toISOString()
  const line = JSON.stringify({
    level,
    ...fields,
  })

  switch (level) {
    case 'info':
    case 'debug':
      console.info(message, ts, line)
      break
    case 'warn':
      console.warn(message, ts, line)
      break
    case 'error':
      console.error(message, ts, line)
      break
    default:
      console.log(message, ts, line)
  }
}

export const logger = {
  info: (message: string, f: Fields = {}) => emit('info', message, f),
  debug: (message: string, f: Fields = {}) => emit('debug', message, f),
  warn: (message: string, f: Fields = {}) => emit('warn', message, f),
  error: (message: string, f: Fields = {}) => emit('error', message, f),
}
