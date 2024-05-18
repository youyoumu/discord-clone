import { fetchChannel } from '@/lib/actions'
import { NewMessageForm } from '@/components/new-message-form'

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
  return (
    <div className="flex flex-col w-full justify-between">
      <div>{Messages}</div>
      <NewMessageForm serverId={params.serverId} channelId={params.channelId} />
    </div>
  )
}
