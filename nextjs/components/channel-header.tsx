import Image from 'next/image'

export function ChannelHeader({ channelName }: { channelName: string }) {
  return (
    <div className="flex gap-1 p-2 border-b border-border font-semibold">
      <Image src="/hashtag.svg" alt="" width={24} height={24}></Image>
      {channelName}
    </div>
  )
}
