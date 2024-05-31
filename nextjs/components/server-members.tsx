import { fetchServer } from '@/lib/actions'
import { Avatar } from './avatar'
import { ScrollArea } from './ui/scroll-area'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'

interface Member {
  id: number
  username: string
  avatar_url: string
  display_name: string
  last_visit: string
  bio: string
  created_at: string
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
    const created_at = dayjs(member.created_at).format('DD/MM/YYYY')
    const d = dayjs(member.last_visit)
    const now = dayjs()
    const diffDays = now.diff(d, 'days')
    const diffMinutes = now.diff(d, 'minutes')
    let time
    if (diffDays < 2) {
      time = d.fromNow()
    } else {
      time = d.format('DD/MM/YYYY')
    }

    if (diffMinutes < 30) {
      time = 'online'
    }

    return (
      <Popover key={member.id}>
        <PopoverTrigger>
          <div className="flex gap-2 items-center hover:bg-card p-2 rounded-sm">
            <Avatar url={member.avatar_url} />
            <div className="text-md font-medium max-w-24 overflow-hidden flex flex-col items-start">
              {member.id === ownerId ? <div className="text-sm">👑</div> : null}
              <div>
                {member.display_name ? member.display_name : member.username}
              </div>
              <div className="text-xs text-slate-500">{time}</div>
            </div>
          </div>
        </PopoverTrigger>
        <PopoverContent side="left" align="start">
          <Avatar url={member.avatar_url} bigger={true} />
          <div className="text-md font-medium overflow-hidden p-2 mt-2 rounded-md">
            <div className="text-xl font-semibold">
              {member.display_name ? member.display_name : member.username}
            </div>
            <div className="text-sm">
              {member.display_name ? member.username : null}
            </div>

            <Separator className="my-2" />
            <div>About Me</div>
            <div className="text-sm text-primary/70">{member.bio}</div>
            <Separator className="my-2" />

            <div className="text-sm text-primary/80">{`Joined ${created_at}`}</div>
          </div>
        </PopoverContent>
      </Popover>
    )
  })

  return (
    <div className="max-w-48 min-w-48 border-s border-border h-full flex flex-col dark:bg-teal-950/50 dark:border-none">
      <ScrollArea className="grow">
        <div className="flex flex-col p-2 h-full">{Members}</div>
      </ScrollArea>
    </div>
  )
}
