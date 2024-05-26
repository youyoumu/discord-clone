import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-3xl font-bold mb-4">Discord Clone</h1>
      <Link href="/app" className={buttonVariants({ variant: 'default' })}>
        Go to App
      </Link>
    </div>
  )
}
