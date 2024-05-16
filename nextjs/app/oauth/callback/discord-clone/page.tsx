'use client'

import { useSearchParams } from 'next/navigation'
import { getAccessToken } from './action'
import { useEffect } from 'react'

export default function DiscordClone() {
  const params = useSearchParams()
  const code = params.get('code') || ''

  return (
    <form action={getAccessToken}>
      <input name="code" type="text" value={code as string} readOnly />
      <button type="submit">Submit</button>
    </form>
  )
}
