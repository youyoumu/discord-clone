import { fetchChannel } from '@/lib/actions'
import { NewMessageForm } from '@/components/new-message-form'
import { Message } from '@/components/message'
import { ScrollArea } from '@/components/ui/scroll-area'
import { ServerMembers } from '@/components/server-members'

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
    <div className="flex w-full">
      <div className="flex flex-col w-full justify-between max-h-screen">
        <ScrollArea className="px-4 pt-4">{Messages}</ScrollArea>
        <NewMessageForm
          serverId={params.serverId}
          channelId={params.channelId}
        />
      </div>
      <ServerMembers serverId={params.serverId} />
    </div>
  )
}
