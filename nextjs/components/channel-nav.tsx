import { fetchServer } from '@/lib/actions'
import { NewChannelDialog } from './new-channel-dialog'
import { ChannelNavLink } from './channel-nav-link'
import { ChannelFooterProfile } from './channel-footer-profile'

interface Channel {
  id: number
  name: string
  server_id: number
}

export async function ChannelNav({ serverId }: { serverId: string }) {
  const server = await fetchServer(serverId)
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
        <NewChannelDialog serverId={serverId} />
      </div>
      <ChannelFooterProfile />
    </div>
  )
}
