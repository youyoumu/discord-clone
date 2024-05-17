'use server'

import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'

const BE_URL = process.env.BE_URL

export async function fetchJoinedServers() {
  const access_token = cookies().get('access_token')?.value
  let response

  try {
    response = await fetch(`${BE_URL}/api/v1/servers/`, {
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
    if (response?.status === 401) {
      redirect('/login')
    }
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

export async function createServer(formData: FormData) {
  const access_token = cookies().get('access_token')?.value
  try {
    const response = await fetch(`${BE_URL}/api/v1/servers/`, {
      cache: 'no-store',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${access_token}`
      },
      body: JSON.stringify({
        server: {
          name: formData.get('name')
        }
      })
    })
    const data = await response.json()
    console.log(data)
  } catch (error) {
    throw new Error('Failed to create server')
  }
  revalidatePath('/app')
}
