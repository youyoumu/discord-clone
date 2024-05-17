'use server'

import { cookies } from 'next/headers'

const BE_URL = process.env.BE_URL
const access_token = cookies().get('access_token')?.value

export async function fetchJoinedServers() {
  try {
    const response = await fetch(`${BE_URL}/api/v1/servers/`, {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${access_token}`
      }
    })
    const data = await response.json()
    console.log(data)
    return data
  } catch (error) {
    throw new Error('Failed to fetch joined servers')
  }
}
