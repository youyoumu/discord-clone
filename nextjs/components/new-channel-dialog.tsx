import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { NewChannelForm } from '@/components/new-channel-form'

export function NewChannelDialog({ serverId }: { serverId: string }) {
  return (
    <Dialog>
      <DialogTrigger className="border border-border rounded-md p-1 transition-colors hover:bg-primary/5 w-full">
        New Channel
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create new channel</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <NewChannelForm serverId={serverId} />
      </DialogContent>
    </Dialog>
  )
}
