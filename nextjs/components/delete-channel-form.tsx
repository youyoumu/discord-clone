import { deleteChannel } from '@/lib/actions'

export function DeleteChannelForm({
  serverId,
  channelId
}: {
  serverId: string
  channelId: string
}) {
  return (
    <form action={deleteChannel}>
      <input type="text" name="serverId" value={serverId} hidden readOnly />
      <input type="text" name="channelId" value={channelId} hidden readOnly />
      <button type="submit" className="text-red-500">
        Delete Channel
      </button>
    </form>
  )
}
