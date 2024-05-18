import { fetchChannel } from '@/lib/actions'

interface Message {
  id: number
  content: string
}

export default async function Page({
  params
}: {
  params: { serverId: string; channelId: string }
}) {
  const channel = await fetchChannel(params.serverId, params.channelId)
  const messages = channel.messages
  const Messages = messages.map((message: Message) => (
    <div key={message.id}>{message.content}</div>
  ))
  return <div>{Messages}</div>
}
