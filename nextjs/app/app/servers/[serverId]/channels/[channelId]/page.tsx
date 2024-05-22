import { fetchChannel } from '@/lib/actions'
import { NewMessageForm } from '@/components/new-message-form'
import { Message } from '@/components/message'
import { ScrollArea } from '@/components/ui/scroll-area'
import { ServerMembers } from '@/components/server-members'
import { ChannelHeader } from '@/components/channel-header'

interface Message {
  user: {
    username: string
    avatar_url: string
    display_name: string
  }
  data: {
    id: string
    content: string
    created_at: string
  }
}

export default async function Page({
  params
}: {
  params: { serverId: string; channelId: string }
}) {
  const channel = await fetchChannel(params.serverId, params.channelId)
  const channelName = channel.channel.name
  const messages = channel.messages
  const Messages = messages.map((message: Message) => (
    <Message key={message.data.id} message={message} />
  ))
  return (
    <div className="flex w-full grow h-full">
      <div className="flex flex-col w-full justify-between">
        <ChannelHeader channelName={channelName}></ChannelHeader>
        <ScrollArea className="px-4 grow">{Messages}</ScrollArea>
        <NewMessageForm
          serverId={params.serverId}
          channelId={params.channelId}
        />
      </div>
      <ServerMembers serverId={params.serverId} />
    </div>
  )
}
