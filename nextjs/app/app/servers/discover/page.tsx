import { fetchServerDiscover } from '@/lib/actions'
import { ServerCard } from '@/components/server-card'
import { ScrollArea } from '@/components/ui/scroll-area'

interface Server {
  id: number
  name: string
}

export default async function Page() {
  const servers = await fetchServerDiscover()
  console.log(servers)
  const Servers = servers.map((server: Server) => (
    <ServerCard
      key={server.id}
      name={server.name}
      serverId={server.id.toString()}
    />
  ))
  return (
    <ScrollArea>
      <div className="flex flex-wrap p-4 gap-4 w-full h-min">{Servers}</div>
    </ScrollArea>
  )
}
