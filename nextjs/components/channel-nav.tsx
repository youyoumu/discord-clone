import { fetchServer } from '@/lib/actions'
import { NewServerDialog } from './new-channel-dialog'

interface Channel {
  id: number
  name: string
  server_id: number
}

export async function ChannelNav({ id }: { id: string }) {
  const server = await fetchServer(id)
  const channels = server.channels
  const Channels = channels.map((channel: Channel) => (
    <div key={channel.id} className="border border-gray-300 rounded-md p-2">
      {channel.name}
    </div>
  ))
  return (
    <div className="flex flex-col p-4 w-52 gap-2 border-e border-border">
      {Channels}
      <NewServerDialog id={id} />
    </div>
  )
}
