import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Button } from './ui/button'

import { renameChannel } from '@/lib/actions'

interface Channel {
  id: string
  name: string
  server_id: string
}

export function RenameChannelDialog({ channel }: { channel: Channel }) {
  const serverId = channel.server_id
  const channelId = channel.id

  return (
    <Dialog>
      <DialogTrigger>Rename Channel</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Rename Channel</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <form action={renameChannel}>
          <div className="flex flex-col gap-4 mb-6">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="display-name">Channel Name</Label>
              <Input
                type="text"
                id="channel-name"
                name="channelName"
                placeholder="Channel Name"
                defaultValue={channel.name}
              />
            </div>
          </div>
          <input type="text" name="serverId" value={serverId} hidden readOnly />
          <input
            type="text"
            name="channelId"
            value={channelId}
            hidden
            readOnly
          />
          <Button type="submit">Update</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
