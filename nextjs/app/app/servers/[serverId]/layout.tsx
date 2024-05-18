import { ChannelNav } from '@/components/channel-nav'

export default function Layout({
  children,
  params
}: {
  children: React.ReactNode
  params: { serverId: string }
}) {
  return (
    <div className="flex w-full">
      <ChannelNav serverId={params.serverId} />
      {children}
    </div>
  )
}
