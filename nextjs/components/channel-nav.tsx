import { fetchServer, fetchOwnedServers } from '@/lib/actions'
import { NewChannelDialog } from './new-channel-dialog'
import { ChannelNavLink } from './channel-nav-link'
import { ChannelFooterProfile } from './channel-footer-profile'

interface Channel {
  id: number
  name: string
  server_id: number
}

interface Server {
  id: number
  name: string
  user_id: number
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
      id={channel.id.toString()}
      name={channel.name}
      serverId={serverId}
    />
  ))
  return (
    <div className="flex flex-col">
      <div className="flex flex-col flex-1 p-4 w-52 min-w-52 gap-2 border-e border-b border-border">
        {Channels}
        {isOwned && <NewChannelDialog serverId={serverId} />}
      </div>
      <ChannelFooterProfile />
    </div>
  )
}
