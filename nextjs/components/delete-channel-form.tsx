export function DeleteChannelForm({
  serverId,
  channelId
}: {
  serverId: string
  channelId: string
}) {
  return (
    <form>
      <input type="text" name="serverId" value={serverId} hidden readOnly />
      <input type="text" name="channelId" value={channelId} hidden readOnly />
      <button type="submit">Delete Channel</button>
    </form>
  )
}
