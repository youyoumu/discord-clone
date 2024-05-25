import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { JoinServerForm } from './join-server-form'

interface Server {
  id: string
  name: string
  user_id: number
  icon_url: string
  banner_url: string
  description: string
}

export function ServerCard({ server }: { server: Server }) {
  return (
    <Card className="h-64 w-64 flex flex-col justify-between">
      <CardHeader>
        <CardTitle>{server.name}</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <JoinServerForm serverId={server.id} />
      </CardContent>
    </Card>
  )
}
