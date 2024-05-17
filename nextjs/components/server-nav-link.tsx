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
      className={clsx('border border-gray-300 rounded-md p-2', {
        'bg-black text-white': pathname === link
      })}
      href={link}
    >
      {name}
    </Link>
  )
}
