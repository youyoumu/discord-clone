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
  icon_url: string
}
export function ServerIcon({ server }: { server: Server }) {
  const name = server.name ? server.name[0].toUpperCase() : ''
  const [urlValid, setUrlValid] = useState(validateUrl(server.icon_url))

  function validateUrl(value: string) {
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
      value
    )
  }

  useEffect(() => {
    setUrlValid(validateUrl(server.icon_url))
  }, [server.icon_url])

  if (urlValid) {
    return (
      <TooltipProvider delayDuration={50}>
        <Tooltip>
          <TooltipTrigger>
            <Image
              src={server.icon_url ? server.icon_url : ''}
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
          <TooltipContent side="right">
            <p>{server.name}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  }
  return (
    <TooltipProvider delayDuration={50}>
      <Tooltip>
        <TooltipTrigger>
          <div className="text-4xl flex justify-center items-center border border-border rounded-full w-14 h-14">
            {name}
          </div>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>{server.name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
