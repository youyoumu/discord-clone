import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'

import { NewServerForm } from '@/components/new-server-form'
import Image from 'next/image'

export function NewServerDialog() {
  return (
    <TooltipProvider delayDuration={50}>
      <Tooltip>
        <TooltipTrigger>
          <Dialog>
            <DialogTrigger className="flex justify-center items-center border-none rounded-full">
              <Image src="/plus.svg" alt="" width={60} height={60}></Image>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create new server</DialogTitle>
                <DialogDescription></DialogDescription>
              </DialogHeader>
              <NewServerForm />
            </DialogContent>
          </Dialog>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>Create New Server</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
