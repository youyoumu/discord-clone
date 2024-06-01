import { ServerNav } from '@/components/server-nav'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen h-screen flex max-h-[1440px]">
      <ServerNav />
      {children}
    </div>
  )
}
