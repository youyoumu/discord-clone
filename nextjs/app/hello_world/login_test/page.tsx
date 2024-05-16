const BE_URL = process.env.BE_URL

async function fetchHelloWorld() {
  try {
    const response = await fetch(`${BE_URL}/hello_world/login_test`, {
      cache: 'no-store'
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export default async function LoginTest() {
  const data = await fetchHelloWorld()
  return <div>{data.message}</div>
}
