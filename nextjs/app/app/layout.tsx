import { ServerNav } from '@/components/server-nav'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen h-screen flex">
      <ServerNav />
      {children}
    </div>
  )
}
