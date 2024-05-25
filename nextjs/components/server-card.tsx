import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { JoinServerForm } from './join-server-form'
import Image from 'next/image'

interface Server {
  id: string
  name: string
  user_id: number
  icon_url: string
  banner_url: string
  description: string
  member_count: number
  message_count: number
}

export function ServerCard({ server }: { server: Server }) {
  const bannerUrl = server.banner_url ? server.banner_url : ''
  const iconUrl = server.icon_url ? server.icon_url : ''

  return (
    <Card className="h-[30rem] w-full max-w-md flex flex-col justify-between">
      <div className="h-36 bg-foreground rounded-t-md">
        {bannerUrl && (
          <Image
            src={bannerUrl}
            alt=""
            width={0}
            height={0}
            unoptimized={true}
            className="object-cover object-top w-full h-full max-h-36 rounded-t-md"
          ></Image>
        )}
      </div>
      <CardHeader>
        {iconUrl && (
          <Image
            src={iconUrl}
            alt=""
            width={0}
            height={0}
            unoptimized={true}
            className="object-cover object-top w-12 max-w-12 max-h-12 rounded-full"
          ></Image>
        )}
        <CardTitle className="overflow-hidden">{server.name}</CardTitle>
        <CardDescription className="text-wrap break-words overflow-hidden">
          {server.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 text-xs text-slate-500 overflow-hidden">
          <div>{server.member_count} Members</div>
          <div>{server.message_count} Messages</div>
        </div>
        <JoinServerForm serverId={server.id} />
      </CardContent>
    </Card>
  )
}
