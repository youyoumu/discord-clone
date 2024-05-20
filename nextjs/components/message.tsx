import Image from 'next/image'
import { Datetime } from './datetime'

export function Message({
  content,
  username,
  datetime
}: {
  content: string
  username: string
  datetime: string
}) {
  return (
    <div className="flex gap-2 py-2">
      <Image
        src="/user.png"
        alt=""
        width={40}
        height={40}
        className="object-contain"
      />
      <div>
        <div className="flex gap-2 items-center">
          <div className="font-medium">{username}</div>
          <Datetime datetime={datetime} />
        </div>
        <p className="text-sm">{content}</p>
      </div>
    </div>
  )
}
