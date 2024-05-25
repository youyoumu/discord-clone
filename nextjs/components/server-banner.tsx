'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { LeaveServerForm } from './leave-server-form'
import { ServerSettingsForm } from './server-settings-form'
import { DeleteServerForm } from './delete-server-form'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

interface Server {
  server: {
    id: string
    name: string
    user_id: number
    icon_url?: string
    banner_url?: string
  }
}

interface OwnedServer {
  id: string
  name: string
  user_id: number
  icon_url?: string
  banner_url?: string
}

export function ServerBanner({
  server,
  ownedServers
}: {
  server: Server
  ownedServers: OwnedServer[]
}) {
  const [urlValid, setUrlValid] = useState(true)
  const bannerUrl = server.server.banner_url ? server.server.banner_url : ''
  const name = server.server.name
  const owned = ownedServers.some((s) => s.id === server.server.id)

  useEffect(() => {
    setUrlValid(true)
  }, [bannerUrl])

  const BannerImage = () => {
    if (urlValid) {
      return (
        <Image
          src={bannerUrl}
          alt=""
          width={0}
          height={0}
          unoptimized={true}
          className="object-cover w-auto"
          onError={() => {
            setUrlValid(false)
          }}
        ></Image>
      )
    } else {
      return
    }
  }
  return (
    <div className="w-full h-36 overflow-hidden bg-zinc-900 relative">
      <BannerImage />
      <div className="p-2 text-background absolute top-0 left-0 text-lg font-semibold drop-shadow-[0_1.2px_1.9px_rgba(0,0,0,1)]">
        {name}
      </div>
      <Dialog>
        <DropdownMenu>
          <DropdownMenuTrigger className="absolute top-0 right-0">
            <Image
              src="/dropdown.svg"
              alt=""
              width={40}
              height={40}
              className="drop-shadow-[0_1.2px_1.9px_rgba(0,0,0,1)]"
            ></Image>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DialogTrigger asChild>
              {owned ? (
                <DropdownMenuItem>Server Settings</DropdownMenuItem>
              ) : null}
            </DialogTrigger>
            {owned ? (
              <DropdownMenuItem>
                <DeleteServerForm server={server} />
              </DropdownMenuItem>
            ) : (
              <DropdownMenuItem>
                <LeaveServerForm server={server} />
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Settings</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <ServerSettingsForm server={server} />
        </DialogContent>
      </Dialog>
    </div>
  )
}
