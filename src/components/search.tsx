import { useRouter, useSearch } from '@tanstack/react-router'
import { useDebouncedCallback } from 'use-debounce'

interface SearchProps {
  readonly className?: string
}

export function Search({ className = '' }: SearchProps) {
  const search: { query?: string } = useSearch({ strict: false })
  const router = useRouter()

  const handleSearch = useDebouncedCallback((term: string) => {
    router.navigate({
      to: '.',
      search: (prev) => ({
        ...prev,
        page: 1,
        query: term || undefined,
      }),
      replace: true,
    })
  }, 300)

  return (
    <input
      type="text"
      placeholder="Search articles..."
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        handleSearch(e.target.value)
      }
      defaultValue={search?.query || ''}
      className={`demo-input ${className}`}
    />
  )
}
