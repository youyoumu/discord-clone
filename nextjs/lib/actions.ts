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

export async function createChannel(formData: FormData) {
  const access_token = cookies().get('access_token')?.value
  const server_id = formData.get('id')
  const name = formData.get('name')
  try {
    const response = await fetch(
      `${BE_URL}/api/v1/servers/${server_id}/channels`,
      {
        cache: 'no-store',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access_token}`
        },
        body: JSON.stringify({
          channel: {
            name: name
          }
        })
      }
    )
    const data = await response.json()
    console.log(data)
  } catch (error) {
    throw new Error('Failed to create channel')
  }
  revalidatePath('/app')
}

export async function fetchChannel(serverId: string, channelId: string) {
  const access_token = cookies().get('access_token')?.value
  try {
    const response = await fetch(
      `${BE_URL}/api/v1/servers/${serverId}/channels/${channelId}`,
      {
        cache: 'no-store',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access_token}`
        }
      }
    )
    const data = await response.json()
    console.log(data)
    return data
  } catch (error) {
    throw new Error('Failed to fetch channel')
  }
}

export async function createMessage(formData: FormData) {
  const access_token = cookies().get('access_token')?.value
  const server_id = formData.get('serverId')
  const channel_id = formData.get('channelId')
  const content = formData.get('content')
  try {
    const response = await fetch(`${BE_URL}/api/v1/messages`, {
      cache: 'no-store',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${access_token}`
      },
      body: JSON.stringify({
        server_id,
        channel_id,
        message: {
          content
        }
      })
    })
    const data = await response.json()
    console.log(data)
  } catch (error) {
    throw new Error('Failed to create message')
  }
  revalidatePath(`/app/servers/${server_id}/channels/${channel_id}`)
}

export async function fetchServerDiscover() {
  const access_token = cookies().get('access_token')?.value
  try {
    const response = await fetch(`${BE_URL}/api/v1/discover`, {
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
    throw new Error('Failed to fetch discover servers')
  }
}

export async function joinServer(formData: FormData) {
  const access_token = cookies().get('access_token')?.value
  const server_id = formData.get('serverId')
  try {
    const response = await fetch(`${BE_URL}/api/v1/servers/${server_id}/join`, {
      cache: 'no-store',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${access_token}`
      }
    })
    const data = await response.json()
    console.log(data)
  } catch (error) {
    throw new Error('Failed to join server')
  }
  revalidatePath('/app')
}

export async function fetchMe() {
  const access_token = cookies().get('access_token')?.value
  try {
    const response = await fetch(`${BE_URL}/api/v1/me`, {
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
    throw new Error('Failed to fetch me')
  }
}

export async function fetchOwnedServers() {
  const access_token = cookies().get('access_token')?.value
  try {
    const response = await fetch(`${BE_URL}/api/v1/owned_servers`, {
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
    throw new Error('Failed to fetch owned servers')
  }
}

export async function updateMe(formData: FormData) {
  const access_token = cookies().get('access_token')?.value
  try {
    const response = await fetch(`${BE_URL}/api/v1/me`, {
      cache: 'no-store',
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${access_token}`
      },
      body: JSON.stringify({
        display_name: formData.get('displayName'),
        bio: formData.get('bio'),
        avatar_url: formData.get('avatarUrl')
      })
    })
    const data = await response.json()
    console.log(data)
  } catch (error) {
    throw new Error('Failed to update user data')
  }
  revalidatePath('/app')
}
