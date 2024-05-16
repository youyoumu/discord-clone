async function fetchHelloWorld() {
  try {
    const response = await fetch('http://localhost:3001/hello_world', {
      cache: 'no-store'
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export default async function HelloWorld() {
  const hello_world = await fetchHelloWorld()
  return <div>{hello_world.message}</div>
}
