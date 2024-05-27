import { cookies } from 'next/headers'

const BE_URL = process.env.BE_URL

async function fetchHelloWorld() {
  const access_token = cookies().get('access_token')?.value
  console.log('access_token', access_token)
  try {
    const response = await fetch(`${BE_URL}/hello_world/login_test`, {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${access_token}`
      }
    })
    const data = await response.json()

    return data
  } catch (error) {
    throw new Error('Failed to fetch')
  }
}

export default async function LoginTest() {
  const data = await fetchHelloWorld()
  return (
    <div>
      <p>{data.message}</p>
      <p>{data.error}</p>
    </div>
  )
}
