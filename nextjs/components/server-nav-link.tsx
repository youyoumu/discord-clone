'use client'

import Link from 'next/link'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'

export function ServerNavLink({ id, name }: { id: string; name: string }) {
  const pathname = usePathname()
  const link = `/app/server/${id}`

  return (
    <Link
      key={id}
      className={clsx('border border-border rounded-md p-2 transition-colors', {
        'bg-primary text-primary-foreground hover:bg-primary/90':
          pathname === link,
        'hover:bg-primary/5': pathname !== link
      })}
      href={link}
    >
      {name}
    </Link>
  )
}
