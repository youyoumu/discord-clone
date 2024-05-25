import { deleteMessage } from '@/lib/actions'

export function DeleteMessageForm({
  message,
  serverId,
  channelId
}: {
  message: {
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
  serverId: string
  channelId: string
}) {
  return (
    <form action={deleteMessage}>
      <input
        type="text"
        name="messageId"
        value={message.data.id}
        hidden
        readOnly
      />
      <input type="text" name="serverId" value={serverId} hidden readOnly />
      <input type="text" name="channelId" value={channelId} hidden readOnly />
      <button type="submit" className="text-red-500">
        Delete Message
      </button>
    </form>
  )
}
