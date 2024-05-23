interface Server {
  server: {
    id: string
  }
}

export function LeaveServerForm({ server }: { server: Server }) {
  return (
    <form action="">
      <input type="hidden" name="serverId" value={server.server.id} />
      <button type="submit">Leave Server</button>
    </form>
  )
}
