'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const BE_URL = process.env.BE_URL
const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET
const REDIRECT_URI = process.env.REDIRECT_URI

export async function getAccessToken(formData: FormData) {
  const code = formData.get('code')
  try {
    const response = await fetch(`${BE_URL}/oauth/token`, {
      cache: 'no-store',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        grant_type: 'authorization_code',
        code,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        redirect_uri: REDIRECT_URI
      })
    })
    const data = await response.json()
    cookies().set('access_token', data.access_token, {
      httpOnly: true
    })
    console.log(data)
  } catch (error) {
    throw new Error('Failed to get access token')
  }
}
