import { fetchServer } from '@/lib/actions'
import { Avatar } from './avatar'
import { ScrollArea } from './ui/scroll-area'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

interface Member {
  id: number
  username: string
  avatar_url: string
  display_name: string
  last_visit: string
}

export async function ServerMembers({ serverId }: { serverId: string }) {
  const server = await fetchServer(serverId)
  const members = server.members
  const ownerId = server.server.user_id

  // for testing
  // const members = []
  // for (let i = 0; i < 25; i++) {
  //   members.push({ id: i, username: 'test' })
  // }

  const Members = members.map((member: Member) => {
    dayjs.extend(relativeTime)
    const d = dayjs(member.last_visit)
    const now = dayjs()
    const diffDays = now.diff(d, 'days')
    const diffMinutes = now.diff(d, 'minutes')
    let time
    if (diffDays < 2) {
      time = d.fromNow()
    } else {
      time = d.format('DD/MM/YYYY hh:mm A')
    }

    if (diffMinutes < 30) {
      time = 'online'
    }

    return (
      <div key={member.id} className="flex gap-2 items-center">
        <Avatar url={member.avatar_url} />
        <div className="text-md font-medium max-w-24 overflow-hidden">
          {member.id === ownerId ? <div className="text-sm">👑</div> : null}
          <div>
            {member.display_name ? member.display_name : member.username}
          </div>
          <div className="text-xs text-slate-500">{time}</div>
        </div>
      </div>
    )
  })

  return (
    <div className="max-w-48 min-w-48 border border-border h-full flex flex-col">
      <ScrollArea className="grow">
        <div className="flex flex-col gap-3 p-4 h-full">{Members}</div>
      </ScrollArea>
    </div>
  )
}
