const BE_URL = process.env.BE_URL

async function fetchHelloWorld() {
  try {
    const response = await fetch(`${BE_URL}/hello_world`, {
      cache: 'no-store'
    })
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error('Failed to fetch')
  }
}

export default async function HelloWorld() {
  const hello_world = await fetchHelloWorld()
  return <div>{hello_world.message}</div>
}
