import { fetchServer } from '@/lib/actions'
import { NewChannelDialog } from './new-channel-dialog'

interface Channel {
  id: number
  name: string
  server_id: number
}

export async function ChannelNav({ serverId }: { serverId: string }) {
  const server = await fetchServer(serverId)
  const channels = server.channels
  const Channels = channels.map((channel: Channel) => (
    <div key={channel.id} className="border border-gray-300 rounded-md p-2">
      {channel.name}
    </div>
  ))
  return (
    <div className="flex flex-col p-4 w-52 gap-2 border-e border-border">
      {Channels}
      <NewChannelDialog serverId={serverId} />
    </div>
  )
}
