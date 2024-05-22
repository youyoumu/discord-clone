// 'use client'

import Link from 'next/link'
// import clsx from 'clsx'
// import { usePathname } from 'next/navigation'
import { ServerIcon } from './server-icon'

interface Server {
  id: string
  name: string
  icon_url?: string
}

export function ServerNavLink({ server }: { server: Server }) {
  // const pathname = usePathname()
  const link = `/app/servers/${server.id}`

  return (
    <Link
      key={server.id}
      className={
        `border border-border rounded-full p-2 transition-colors w-12 h-12 overflow-hidden flex justify-center items-center`
        // clsx(
        // 'border border-border rounded-md p-2 transition-colors block max-w-20 min-w-20 overflow-hidden',
        // {
        //   'bg-primary text-primary-foreground hover:bg-primary/90':
        //     pathname === link || pathname.includes(link + '/'),
        //   'hover:bg-primary/5': pathname !== link
        // }
        // )
      }
      href={link}
    >
      <ServerIcon server={server} />
    </Link>
  )
}
