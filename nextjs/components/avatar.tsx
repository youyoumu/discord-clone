'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

export function Avatar({ url }: { url: string }) {
  const [urlValid, setUrlValid] = useState(true)
  const avatarUrl = urlValid ? url : '/user.png'

  useEffect(() => {
    setUrlValid(true)
  }, [url])

  return (
    <Image
      src={avatarUrl}
      alt=""
      width={40}
      height={40}
      unoptimized={true}
      onError={() => {
        setUrlValid(false)
      }}
    ></Image>
  )
}
