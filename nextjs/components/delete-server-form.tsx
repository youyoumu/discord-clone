interface Server {
  server: {
    id: string
    name: string
    user_id: number
    icon_url?: string
    banner_url?: string
  }
}

export function DeleteServerForm({ server }: { server: Server }) {
  return (
    <form>
      <input type="hidden" name="serverId" value={server.server.id} />
      <button type="submit" className="text-red-500">
        Delete Server
      </button>
    </form>
  )
}
