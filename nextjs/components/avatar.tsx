'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

export function Avatar({
  url,
  setUrlValidParent
}: {
  url: string
  setUrlValidParent: any
}) {
  const [urlValid, setUrlValid] = useState(true)
  const avatarUrl = urlValid ? url : '/user.png'

  useEffect(() => {
    setUrlValid(true)
    setUrlValidParent(true)
  }, [url, setUrlValidParent])

  return (
    <Image
      src={avatarUrl}
      alt=""
      width={40}
      height={40}
      unoptimized={true}
      onError={() => {
        setUrlValid(false)
        setUrlValidParent(false)
      }}
    ></Image>
  )
}
