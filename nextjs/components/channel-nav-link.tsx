'use client'

import Link from 'next/link'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import { DeleteChannelForm } from './delete-channel-form'
import { RenameChannelDialog } from './rename-channel-dialog'
import Image from 'next/image'

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger
} from '@/components/ui/context-menu'

interface Channel {
  id: string
  name: string
  server_id: string
}

interface Server {
  id: string
  name: string
  user_id: number
  icon_url?: string
  banner_url?: string
  description?: string
}

export function ChannelNavLink({
  channel,
  ownedServers
}: {
  channel: Channel
  ownedServers: Server[]
}) {
  const serverId = channel.server_id
  const id = channel.id
  const name = channel.name
  const pathname = usePathname()
  const link = `/app/servers/${serverId}/channels/${id}`

  if (!ownedServers.some((server) => server.id === serverId)) {
    return (
      <div className="flex gap-1">
        <Image src="/hashtag.svg" alt="" width={24} height={24}></Image>

        <Link
          key={id}
          className={clsx(
            'border border-border rounded-md p-2 transition-colors flex grow shadow-sm',
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
      </div>
    )
  }

  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <div className="flex gap-1">
          <Image src="/hashtag.svg" alt="" width={24} height={24}></Image>

          <Link
            key={id}
            className={clsx(
              'border border-border rounded-md p-2 transition-colors flex max-w-56 w-full overflow-hidden grow shadow-sm',
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
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem onSelect={(e) => e.preventDefault()}>
          <RenameChannelDialog channel={channel} />
        </ContextMenuItem>
        <ContextMenuItem>
          <DeleteChannelForm serverId={serverId} channelId={id} />
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
