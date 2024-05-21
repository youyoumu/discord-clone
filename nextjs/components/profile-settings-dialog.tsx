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
import { updateUserDatum } from '@/lib/actions'

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
        <form action={updateUserDatum}>
          <div className="flex flex-col gap-4 mb-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="display-name">Display Name</Label>
              <Input
                type="text"
                id="display-name"
                name="displayName"
                placeholder="Display Name"
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="bio">Bio</Label>
              <Input type="text" id="bio" name="bio" placeholder="Bio" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="avatar-url">Avatar URL</Label>
              <Input
                type="text"
                id="avatar-url"
                name="avatarUrl"
                placeholder="Avatar URL"
              />
            </div>
          </div>
          <Button type="submit">Update</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
