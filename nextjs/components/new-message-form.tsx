'use client'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { createMessage } from '@/lib/actions'
import { useState } from 'react'

export function NewMessageForm({
  serverId,
  channelId
}: {
  serverId: string
  channelId: string
}) {
  const [content, setContent] = useState('')

  return (
    <form action={createMessage} onSubmit={() => setContent('')}>
      <div className="flex gap-2 px-4 pb-4 pt-1">
        <input type="text" name="serverId" value={serverId} hidden readOnly />
        <input type="text" name="channelId" value={channelId} hidden readOnly />
        <Input
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Type a message"
          className="shadow-sm"
        />
        <Button type="submit">Submit</Button>
      </div>
    </form>
  )
}
