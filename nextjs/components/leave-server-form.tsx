import { leaveServer } from '@/lib/actions'

interface Server {
  server: {
    id: string
  }
}

export function LeaveServerForm({ server }: { server: Server }) {
  return (
    <form action={leaveServer}>
      <input type="hidden" name="serverId" value={server.server.id} />
      <button type="submit">Leave Server</button>
    </form>
  )
}
