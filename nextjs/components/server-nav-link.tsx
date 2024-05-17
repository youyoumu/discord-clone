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
      className={clsx('border border-border rounded-md p-2', {
        'bg-primary text-primary-foreground': pathname === link
      })}
      href={link}
    >
      {name}
    </Link>
  )
}
