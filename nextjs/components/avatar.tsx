'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

export function Avatar({
  url,
  bigger = false
}: {
  url: string
  bigger?: boolean
}) {
  const [urlValid, setUrlValid] = useState(true)
  url = url ? url : '/user.png'
  const avatarUrl = urlValid ? url : '/user.png'

  useEffect(() => {
    setUrlValid(true)
  }, [url])

  return (
    <Image
      src={avatarUrl}
      alt=""
      width={bigger ? 80 : 40}
      height={bigger ? 80 : 40}
      unoptimized={true}
      onError={() => {
        setUrlValid(false)
      }}
      className={`object-cover rounded-full ${
        bigger ? `w-20 h-20 min-h-20 min-w-20` : `w-11 h-11 min-h-11 min-w-11`
      }`}
    ></Image>
  )
}
