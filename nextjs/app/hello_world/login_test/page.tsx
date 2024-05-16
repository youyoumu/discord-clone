const BE_URL = process.env.BE_URL

async function fetchHelloWorld() {
  try {
    const response = await fetch(`${BE_URL}/hello_world/login_test`, {
      cache: 'no-store'
    })
    if (!response.ok) {
      throw new Error('Failed to fetch')
    }
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error('Failed to fetch')
  }
}

export default async function LoginTest() {
  const data = await fetchHelloWorld()
  return <div>{data.message}</div>
}
