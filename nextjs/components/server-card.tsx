import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { JoinServerForm } from './join-server-form'

export function ServerCard({
  name,
  serverId
}: {
  name: string
  serverId: string
}) {
  return (
    <Card className="h-64 w-64 flex flex-col justify-between">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <JoinServerForm serverId={serverId} />
      </CardContent>
    </Card>
  )
}
