async function fetchHelloWorld() {
  try {
    const response = await fetch(
      'http://localhost:3001/hello_world/login_test',
      {
        cache: 'no-store'
      }
    )
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
