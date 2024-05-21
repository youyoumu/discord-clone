import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import Image from 'next/image'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Button } from './ui/button'

export function ProfileSettingsDialog() {
  return (
    <Dialog>
      <DialogTrigger>
        <Image src="/settings.svg" alt="" width={24} height={24}></Image>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <form action="">
          <div className="flex flex-col gap-4 mb-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="display-name">Display Name</Label>
              <Input type="text" id="display-name" placeholder="Display Name" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="bio">Bio</Label>
              <Input type="text" id="bio" placeholder="Display Name" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="avatar-url">Avatar URL</Label>
              <Input type="text" id="avatar-url" placeholder="Display Name" />
            </div>
          </div>
          <Button type="submit">Update</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
