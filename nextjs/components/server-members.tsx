import { fetchServer } from '@/lib/actions'
import Image from 'next/image'
import { ScrollArea } from './ui/scroll-area'

interface Member {
  id: number
  username: string
}

export async function ServerMembers({ serverId }: { serverId: string }) {
  const server = await fetchServer(serverId)
  const members = server.members

  // for testing
  // const members = []
  // for (let i = 0; i < 25; i++) {
  //   members.push({ id: i, username: 'test' })
  // }

  const Members = members.map((member: Member) => (
    <div key={member.id} className="flex gap-2 items-center">
      <Image
        src="/user.png"
        alt=""
        width={40}
        height={40}
        className="object-contain"
      />
      <div className="text-md font-medium">{member.username}</div>
    </div>
  ))

  return (
    <div className="max-w-64 w-64 border border-border h-full flex flex-col">
      <ScrollArea className="grow">
        <div className="flex flex-col gap-3 p-4 h-full">{Members}</div>
      </ScrollArea>
    </div>
  )
}
