'use client'

import { Button } from '@/components/ui/button'
import { joinServer } from '@/lib/actions'

export function JoinServerForm({ serverId }: { serverId: string }) {
  return (
    <form action={joinServer} className="space-y-8">
      <input type="hidden" name="serverId" value={serverId} />
      <Button className="w-full" type="submit">
        Join
      </Button>
    </form>
  )
}
