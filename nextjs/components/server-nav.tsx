import { fetchJoinedServers } from '@/lib/actions'

interface Server {
  id: number
  name: string
  user_id: number
}

export async function ServerNav() {
  const servers = await fetchJoinedServers()
  const Servers = servers.map((server: Server) => (
    <div key={server.id} className="border border-gray-300 rounded-md p-2">
      {server.name}
    </div>
  ))
  return <div className="flex flex-col p-4 w-32 gap-2">{Servers}</div>
}
