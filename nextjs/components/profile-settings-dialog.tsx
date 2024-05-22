'use client'

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
import { updateMe } from '@/lib/actions'
import { Avatar } from './avatar'
import { useState } from 'react'

interface Me {
  display_name: string
  bio: string
  avatar_url: string
  username: string
}

export function ProfileSettingsDialog({ me }: { me: Me }) {
  const [urlValid, setUrlValid] = useState(true)
  const name = me.display_name ? me.display_name : me.username

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
        <form action={updateMe}>
          <div className="flex flex-col gap-4 mb-6">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="display-name">Display Name</Label>
              <Input
                type="text"
                id="display-name"
                name="displayName"
                placeholder="Display Name"
                defaultValue={me.display_name}
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="bio">Bio</Label>
              <Input
                type="text"
                id="bio"
                name="bio"
                placeholder="Bio"
                defaultValue={me.bio}
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="avatar-url">Avatar URL</Label>
              <Input
                type="text"
                id="avatar-url"
                name="avatarUrl"
                placeholder="Avatar URL"
                defaultValue={me.avatar_url}
              />
              <Image
                src={me.avatar_url}
                alt=""
                width={0}
                height={0}
                unoptimized={true}
                onError={() => {
                  setUrlValid(false)
                }}
              ></Image>
              {!urlValid && (
                <div className="text-red-500 text-sm">Invalid URL</div>
              )}
            </div>
          </div>
          <div>
            <div className="font-semibold mb-2">Preview</div>
            <div className="flex gap-2 p-3 border mb-4 rounded-md w-64 border-border items-center">
              <Avatar url={me.avatar_url} />
              <div className="grow">
                <div>{name}</div>
                <div className="text-xs text-slate-600">Online</div>
              </div>
            </div>
          </div>
          <Button type="submit">Update</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
