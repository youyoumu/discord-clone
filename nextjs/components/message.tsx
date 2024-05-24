import { Datetime } from './datetime'
import { Avatar } from './avatar'

export function Message({
  message
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
}) {
  const name = message.user.display_name
    ? message.user.display_name
    : message.user.username
  return (
    <div className="flex gap-2 py-2">
      <Avatar url={message.user.avatar_url} />
      <div>
        <div className="flex gap-2 items-center">
          <div className="font-medium max-w-56 overflow-hidden">{name}</div>
          <Datetime datetime={message.data.created_at} />
        </div>
        <p className="text-sm text-wrap break-words max-w-sm lg:max-w-xl xl:max-w-2xl 2xl:max-w-4xl">
          {message.data.content}
        </p>
      </div>
    </div>
  )
}
