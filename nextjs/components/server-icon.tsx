'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

interface Server {
  name: string
  icon_url?: string
}
export function ServerIcon({ server }: { server: Server }) {
  const name = server.name[0].toUpperCase()
  const [urlValid, setUrlValid] = useState(true)

  useEffect(() => {
    setUrlValid(true)
  }, [server.icon_url])

  if (urlValid) {
    return (
      <Image
        src={server.icon_url ? server.icon_url : 'null'}
        alt=""
        width={48}
        height={48}
        unoptimized={true}
        onError={() => {
          setUrlValid(false)
        }}
        className="object-contain rounded-full"
      ></Image>
    )
  }
  return (
    <div className="text-4xl flex justify-center items-center border border-border rounded-full w-12 h-12">
      {name}
    </div>
  )
}
