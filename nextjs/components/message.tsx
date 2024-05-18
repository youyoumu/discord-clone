export function Message({
  content,
  username
}: {
  content: string
  username: string
}) {
  return (
    <div>
      <div className="font-medium">{username}</div>
      <p className="text-sm">{content}</p>
    </div>
  )
}
