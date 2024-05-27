import Image from 'next/image'
import { ModeToggle } from './mode-toogle'

export function ChannelHeader({ channelName }: { channelName: string }) {
  return (
    <div className="flex gap-1 p-2 border-b border-border font-semibold items-center">
      <Image src="/hashtag.svg" alt="" width={24} height={24}></Image>
      {channelName}
      <div className="ml-auto">
        <ModeToggle />
      </div>
    </div>
  )
}
