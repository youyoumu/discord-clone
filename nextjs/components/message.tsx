import Image from 'next/image'

export function Message({
  content,
  username
}: {
  content: string
  username: string
}) {
  return (
    <div className="flex gap-2">
      <Image
        src="/user.png"
        alt=""
        width={40}
        height={40}
        className="object-contain"
      />
      <div>
        <div className="font-medium">{username}</div>
        <p className="text-sm">{content}</p>
      </div>
    </div>
  )
}
