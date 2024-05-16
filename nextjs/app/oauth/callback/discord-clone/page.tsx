'use client'

import { useSearchParams } from 'next/navigation'
import { getAccessToken } from './action'

export default function DiscordClone() {
  const params = useSearchParams()
  const code = params.get('code') || ''
  const accessToken = params.get('access_token') || ''
  return (
    <form action={getAccessToken}>
      <input name="code" type="text" value={code as string} readOnly />
      <input
        name="access_token"
        type="text"
        value={accessToken as string}
        readOnly
      />
      <button type="submit">Submit</button>
    </form>
  )
}
