import { fetchServer } from '@/lib/actions'
import { Avatar } from './avatar'
import { ScrollArea } from './ui/scroll-area'

interface Member {
  id: number
  username: string
  avatar_url: string
  display_name: string
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
      <Avatar url={member.avatar_url} />
      <div className="text-md font-medium">
        {member.display_name ? member.display_name : member.username}
      </div>
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
