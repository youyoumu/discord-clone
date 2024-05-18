import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export function NewMessageForm({
  serverId,
  channelId
}: {
  serverId: string
  channelId: string
}) {
  return (
    <form action="">
      <div className="flex gap-2 p-2">
        <Input className="" />
        <Button type="submit">Submit</Button>
      </div>
    </form>
  )
}
