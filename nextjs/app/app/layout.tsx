import { ServerNav } from '@/components/server-nav'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen min-w-screen">
      <ServerNav />
      {children}
    </div>
  )
}
