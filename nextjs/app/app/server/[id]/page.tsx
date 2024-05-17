import { ChannelNav } from '@/components/channel-nav'

export default function Page({ params }: { params: { id: string } }) {
  if (params.id === undefined) {
    return
  }
  return <ChannelNav id={params.id as string} />
}
