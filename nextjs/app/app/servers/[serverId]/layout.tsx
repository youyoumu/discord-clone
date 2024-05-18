import { ChannelNav } from '@/components/channel-nav'

export default function Layout({
  children,
  params
}: {
  children: React.ReactNode
  params: { serverId: string }
}) {
  return (
    <div className="flex">
      <ChannelNav serverId={params.serverId} />
      {children}
    </div>
  )
}
