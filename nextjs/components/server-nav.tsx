import { fetchJoinedServers } from '@/lib/actions'
import { ServerNavLink } from '@/components/server-nav-link'
import { NewServerDialog } from '@/components/new-server-dialog'

interface Server {
  id: number
  name: string
  user_id: number
}

export async function ServerNav() {
  const servers = await fetchJoinedServers()
  const Servers = servers.map((server: Server) => (
    <ServerNavLink
      key={server.id}
      id={server.id.toString()}
      name={server.name}
    />
  ))
  return (
    <div className="flex flex-col p-4 w-32 gap-2 border border-gray-300 ">
      {Servers}
      <NewServerDialog />
    </div>
  )
}
