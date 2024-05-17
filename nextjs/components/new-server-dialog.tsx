import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { NewServerForm } from '@/components/new-server-form'

export function NewServerDialog() {
  return (
    <Dialog>
      <DialogTrigger className="border border-border rounded-md p-1 transition-colors hover:bg-primary/5">
        New Server
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create new server</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <NewServerForm />
      </DialogContent>
    </Dialog>
  )
}
