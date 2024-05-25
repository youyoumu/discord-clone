import { fetchServerDiscover } from '@/lib/actions'
import { ServerCard } from '@/components/server-card'
import { ScrollArea } from '@/components/ui/scroll-area'

interface Server {
  id: string
  name: string
  user_id: number
  icon_url: string
  banner_url: string
  description: string
  member_count: number
  message_count: number
}

export default async function Page() {
  const servers = await fetchServerDiscover()
  console.log(servers)
  const Servers = servers.map((server: Server) => (
    <ServerCard key={server.id} server={server} />
  ))
  return (
    <ScrollArea className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  p-4 gap-4 w-full h-min">
        {Servers}
      </div>
    </ScrollArea>
  )
}
