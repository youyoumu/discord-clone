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

export function RenameChannelDialog({
  serverId,
  channelId
}: {
  serverId: string
  channelId: string
}) {
  return (
    <Dialog>
      <DialogTrigger>Rename Channel</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Rename Channel</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <form>
          <div className="flex flex-col gap-4 mb-6">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="display-name">Channel Name</Label>
              <Input
                type="text"
                id="channel-name"
                name="channelName"
                placeholder="Channel Name"
              />
            </div>
          </div>
          <Button type="submit">Update</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
