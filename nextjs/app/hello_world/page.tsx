import { fetchHelloWorld } from '@/lib/actions'

export default async function Page() {
  const hello_world = await fetchHelloWorld()
  return <div>{hello_world.message}</div>
}
