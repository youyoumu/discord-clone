import { fetchJoinedServers } from '@/lib/actions'
import { ServerNavLink } from '@/components/server-nav-link'
import { NewServerDialog } from '@/components/new-server-dialog'
import { ServerDiscoverLink } from '@/components/server-discover-link'
import { ScrollArea } from './ui/scroll-area'

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
    <div className="flex flex-col p-4 w-32 min-w-32 max gap-2 border-e border-border justify-between min-h-screen max-h-screen">
      <ServerDiscoverLink />
      <ScrollArea className="flex-1">
        <div className="flex flex-col gap-2 items-center">{Servers}</div>
      </ScrollArea>
      <NewServerDialog />
    </div>
  )
}
