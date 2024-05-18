import { fetchServer } from '@/lib/actions'
import { NewChannelDialog } from './new-channel-dialog'
import { ChannelNavLink } from './channel-nav-link'

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
    <div className="flex flex-col p-4 w-52 gap-2 border-e border-border">
      {Channels}
      <NewChannelDialog serverId={serverId} />
    </div>
  )
}
