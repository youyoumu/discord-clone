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
import { useState } from 'react'

import { updateServer } from '@/lib/actions'

interface Server {
  server: {
    id: string
    name: string
    user_id: number
    icon_url?: string
    banner_url?: string
    description?: string
  }
}

export function ServerSettingsDialog({ server }: { server: Server }) {
  const [bannerUrlValid, setBannerUrlValid] = useState(true)
  const [iconUrlValid, setIconUrlValid] = useState(true)
  const name = server.server.name
  const iconUrl = server.server.icon_url ? server.server.icon_url : ''
  const bannerUrl = server.server.banner_url ? server.server.banner_url : ''
  const description = server.server.description

  return (
    <Dialog>
      <DialogTrigger>Server Settings</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <form
          action={updateServer}
          onSubmit={() => {
            setBannerUrlValid(true)
            setIconUrlValid(true)
          }}
        >
          <div className="flex flex-col gap-4 mb-6">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="display-name">Server Name</Label>
              <Input
                type="text"
                id="server-name"
                name="serverName"
                placeholder="Server Name"
                defaultValue={name}
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="bio">Server Description</Label>
              <Input
                type="text"
                id="server-description"
                name="serverDescription"
                placeholder="Server Description"
                defaultValue={description}
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="avatar-url">Icon URL</Label>
              <Input
                type="text"
                id="icon-url"
                name="iconUrl"
                placeholder="Icon URL"
                defaultValue={iconUrl}
              />
              <Image
                src={iconUrl}
                alt=""
                width={0}
                height={0}
                unoptimized={true}
                onError={() => {
                  setIconUrlValid(false)
                }}
              ></Image>
              {!iconUrlValid && iconUrl !== '' && (
                <div className="text-red-500 text-sm">Invalid URL</div>
              )}
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="avatar-url">Banner URL</Label>
              <Input
                type="text"
                id="banner-url"
                name="bannerUrl"
                placeholder="Banner URL"
                defaultValue={bannerUrl}
              />
              <Image
                src={bannerUrl}
                alt=""
                width={0}
                height={0}
                unoptimized={true}
                onError={() => {
                  setBannerUrlValid(false)
                }}
              ></Image>
              {!bannerUrlValid && bannerUrl !== '' && (
                <div className="text-red-500 text-sm">Invalid URL</div>
              )}
            </div>
          </div>
          <input type="hidden" name="serverId" value={server.server.id} />
          <Button type="submit">Update</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
