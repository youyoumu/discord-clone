export function DeleteMessageForm({
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
  return (
    <form>
      <input
        type="text"
        name="messageId"
        value={message.data.id}
        hidden
        readOnly
      />
      <button type="submit" className="text-red-500">
        Delete Message
      </button>
    </form>
  )
}
