'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <h2 className="text-center mb-4">Something went wrong!</h2>
      <Button onClick={() => reset()}>Try again</Button>
    </main>
  )
}
