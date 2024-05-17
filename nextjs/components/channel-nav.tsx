import { fetchServer } from '@/lib/actions'

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
  return <div className="flex flex-col p-4 w-32 gap-2">{Channels}</div>
}
