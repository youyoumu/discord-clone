'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'

interface Server {
  name: string
  icon_url?: string
}
export function ServerIcon({ server }: { server: Server }) {
  const name = server.name ? server.name[0].toUpperCase() : ''
  const [urlValid, setUrlValid] = useState(true)

  useEffect(() => {
    setUrlValid(true)
  }, [server.icon_url])

  if (urlValid) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Image
              src={server.icon_url ? server.icon_url : 'null'}
              alt=""
              width={56}
              height={56}
              unoptimized={true}
              onError={() => {
                setUrlValid(false)
              }}
              className="object-contain rounded-full"
            ></Image>
          </TooltipTrigger>
          <TooltipContent>
            <p>{server.name}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  }
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div className="text-4xl flex justify-center items-center border border-border rounded-full w-14 h-14">
            {name}
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{server.name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
