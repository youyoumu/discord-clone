'use client'

import Link from 'next/link'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger
} from '@/components/ui/context-menu'

export function ChannelNavLink({
  serverId,
  id,
  name
}: {
  serverId: string
  id: string
  name: string
}) {
  const pathname = usePathname()
  const link = `/app/servers/${serverId}/channels/${id}`

  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <Link
          key={id}
          className={clsx(
            'border border-border rounded-md p-2 transition-colors flex',
            {
              'bg-primary text-primary-foreground hover:bg-primary/90':
                pathname === link,
              'hover:bg-primary/5': pathname !== link
            }
          )}
          href={link}
        >
          {name}
        </Link>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Rename Channel</ContextMenuItem>
        <ContextMenuItem>Delete Channel</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
