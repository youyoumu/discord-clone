import { ChannelNav } from '@/components/channel-nav'

export default function Layout({
  children,
  params
}: {
  children: React.ReactNode
  params: { id: string }
}) {
  return (
    <div className="flex">
      <ChannelNav id={params.id} />
      {children}
    </div>
  )
}
