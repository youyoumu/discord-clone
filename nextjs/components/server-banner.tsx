'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { ServerSettingsDialog } from './server-settings-dialog'

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

export function ServerBanner({ server }: { server: Server }) {
  const [urlValid, setUrlValid] = useState(true)
  const bannerUrl = server.server.banner_url ? server.server.banner_url : ''
  const name = server.server.name

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
      <div className="p-2 text-background absolute top-0 left-0 text-lg font-semibold shadow-xl drop-shadow-lg">
        {name}
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger className="absolute top-0 right-0">
          <Image
            src="/dropdown.svg"
            alt=""
            width={40}
            height={40}
            className="drop-shadow-lg"
          ></Image>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
            <ServerSettingsDialog />
          </DropdownMenuItem>
          <DropdownMenuItem>Leave Server</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
