import { createServerFn } from '@tanstack/react-start'

export const getPunkSongs = createServerFn({
  method: 'GET',
}).handler(
  async (): Promise<
    Array<{
      id: number
      name: string
      artist: string
    }>
    // TODO: Simulating async response, will be replaced by real call
    // eslint-disable-next-line @typescript-eslint/require-await
  > => [
    { id: 1, name: 'Teenage Dirtbag', artist: 'Wheatus' },
    { id: 2, name: 'Smells Like Teen Spirit', artist: 'Nirvana' },
    { id: 3, name: 'The Middle', artist: 'Jimmy Eat World' },
    { id: 4, name: 'My Own Worst Enemy', artist: 'Lit' },
    { id: 5, name: 'Fat Lip', artist: 'Sum 41' },
    { id: 6, name: 'All the Small Things', artist: 'blink-182' },
    { id: 7, name: 'Beverly Hills', artist: 'Weezer' },
  ],
)
