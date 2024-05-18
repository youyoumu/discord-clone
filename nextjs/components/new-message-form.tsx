import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { createMessage } from '@/lib/actions'

export function NewMessageForm({
  serverId,
  channelId
}: {
  serverId: string
  channelId: string
}) {
  return (
    <form action={createMessage}>
      <div className="flex gap-2 p-2">
        <input type="text" name="serverId" value={serverId} hidden />
        <input type="text" name="channelId" value={channelId} hidden />
        <Input name="content" />
        <Button type="submit">Submit</Button>
      </div>
    </form>
  )
}
