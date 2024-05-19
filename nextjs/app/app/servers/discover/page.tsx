import { fetchServerDiscover } from '@/lib/actions'

interface Server {
  id: number
  name: string
}

export default async function Page() {
  const servers = await fetchServerDiscover()
  console.log(servers)
  const Servers = servers.map((server: Server) => (
    <div key={server.id}>{server.name}</div>
  ))
  return <div>{Servers}</div>
}
