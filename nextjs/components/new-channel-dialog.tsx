import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { NewChannelForm } from '@/components/new-channel-form'

export function NewServerDialog({ id }: { id: string }) {
  return (
    <Dialog>
      <DialogTrigger className="border border-border rounded-md p-1 transition-colors hover:bg-primary/5">
        New Channel
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create new channel</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <NewChannelForm id={id} />
      </DialogContent>
    </Dialog>
  )
}
