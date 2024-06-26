import { fetchServer, fetchOwnedServers } from '@/lib/actions'
import { NewChannelDialog } from './new-channel-dialog'
import { ChannelNavLink } from './channel-nav-link'
import { ChannelFooterProfile } from './channel-footer-profile'
import { ScrollArea } from './ui/scroll-area'
import { ServerBanner } from './server-banner'

interface Channel {
  id: string
  name: string
  server_id: string
}

interface Server {
  id: string
  name: string
  user_id: string
}

export async function ChannelNav({ serverId }: { serverId: string }) {
  const [server, ownedServers] = await Promise.all([
    fetchServer(serverId),
    fetchOwnedServers()
  ])
  const ownedServerIds = ownedServers.map((server: Server) => server.id)
  const isOwned = ownedServerIds.includes(Number(serverId))
  const channels = server.channels
  const Channels = channels.map((channel: Channel) => (
    <ChannelNavLink
      key={channel.id}
      channel={channel}
      ownedServers={ownedServers}
    />
  ))
  return (
    <div className="flex flex-col w-64 min-w-64 gap-2 border-e border-border max-h-full min-h-full justify-between dark:bg-teal-900/15 dark:border-none">
      <ServerBanner server={server} ownedServers={ownedServers} />
      <ScrollArea className="flex-1">
        <div className="flex flex-col gap-2 py-4 ps-2 pe-4 items-center">
          <div className="flex flex-col gap-2 w-full">{Channels}</div>
          {isOwned && <NewChannelDialog serverId={serverId} />}
        </div>
      </ScrollArea>
      <ChannelFooterProfile />
    </div>
  )
}
