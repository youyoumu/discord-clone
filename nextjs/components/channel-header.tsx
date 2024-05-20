export function ChannelHeader({ channelName }: { channelName: string }) {
  return (
    <div className="flex p-2 border-b border-border font-semibold">
      {channelName}
    </div>
  )
}
