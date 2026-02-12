import { createFileRoute } from '@tanstack/react-router'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from '@/components/ui/empty'

export const Route = createFileRoute('/not-found/')({
  component: NotFoundPage,
})

export function NotFoundPage() {
  return (
    <Empty className="mt-12">
      <EmptyHeader>
        <EmptyTitle>404 - Not Found</EmptyTitle>
        <EmptyDescription className="mt-4">
          The page you&apos;re looking for doesn&apos;t exist. Try searching for what you need
          below.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <EmptyDescription>
          <div className="flex gap-4 flex-col">
            <span>
              Need help?{' '}
              <a className="text-copper" href="/contact-us">
                Contact us
              </a>
            </span>
            <span>
              Go back{' '}
              <a className="text-copper" href="/">
                home
              </a>
              ?
            </span>
          </div>
        </EmptyDescription>
        <img
          src="https://animalclinicofbutler.com/wp-content/uploads/2023/05/black-cat-cutout.png"
          className="w-2/5"
        />
      </EmptyContent>
    </Empty>
  )
}
