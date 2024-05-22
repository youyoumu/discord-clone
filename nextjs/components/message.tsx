import { Datetime } from './datetime'
import { Avatar } from './avatar'

export function Message({
  message
}: {
  message: {
    user: {
      username: string
      avatar_url: string
    }
    data: {
      id: string
      content: string
      created_at: string
    }
  }
}) {
  return (
    <div className="flex gap-2 py-2">
      <Avatar url={message.user.avatar_url} />
      <div>
        <div className="flex gap-2 items-center">
          <div className="font-medium">{message.user.username}</div>
          <Datetime datetime={message.data.created_at} />
        </div>
        <p className="text-sm">{message.data.content}</p>
      </div>
    </div>
  )
}
