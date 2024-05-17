'use server'

import { cookies } from 'next/headers'

const BE_URL = process.env.BE_URL

export async function fetchJoinedServers() {
  const access_token = cookies().get('access_token')?.value

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

export async function fetchServer(id: string) {
  const access_token = cookies().get('access_token')?.value

  try {
    const response = await fetch(`${BE_URL}/api/v1/servers/${id}`, {
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
