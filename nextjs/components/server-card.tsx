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
}

export function ServerCard({ server }: { server: Server }) {
  const bannerUrl = server.banner_url ? server.banner_url : ''
  const iconUrl = server.icon_url ? server.icon_url : ''

  return (
    <Card className="h-96 w-full max-w-md flex flex-col justify-between">
      {bannerUrl && (
        <Image
          src={bannerUrl}
          alt=""
          width={0}
          height={0}
          unoptimized={true}
          className="object-cover object-top w-auto max-h-36 rounded-t-md"
        ></Image>
      )}
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
        <CardTitle>{server.name}</CardTitle>
        <CardDescription>{server.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <JoinServerForm serverId={server.id} />
      </CardContent>
    </Card>
  )
}
