import { fetchChannel } from '@/lib/actions'
import { NewMessageForm } from '@/components/new-message-form'
import { Message } from '@/components/message'

interface Message {
  username: string
  data: {
    id: string
    content: string
  }
}

export default async function Page({
  params
}: {
  params: { serverId: string; channelId: string }
}) {
  const channel = await fetchChannel(params.serverId, params.channelId)
  const messages = channel.messages
  const Messages = messages.map((message: Message) => (
    <Message
      key={message.data.id}
      content={message.data.content}
      username={message.username}
    />
  ))
  return (
    <div className="flex flex-col w-full justify-between">
      <div className="flex flex-col w-full p-4 gap-4">{Messages}</div>
      <NewMessageForm serverId={params.serverId} channelId={params.channelId} />
    </div>
  )
}
