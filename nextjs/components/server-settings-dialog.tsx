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

export function ServerSettingsDialog() {
  const [urlValid, setUrlValid] = useState(true)

  return (
    <Dialog>
      <DialogTrigger>Server Settings</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <form onSubmit={() => setUrlValid(true)}>
          <div className="flex flex-col gap-4 mb-6">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="display-name">Server Name</Label>
              <Input
                type="text"
                id="server-name"
                name="serverName"
                placeholder="Server Name"
                defaultValue={'server test'}
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="bio">Server Description</Label>
              <Input
                type="text"
                id="server-description"
                name="serverDescription"
                placeholder="Server Description"
                defaultValue={'server test description'}
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="avatar-url">Banner URL</Label>
              <Input
                type="text"
                id="banner-url"
                name="bannerUrl"
                placeholder="Banner URL"
                defaultValue={'banner url test'}
              />
              {/* <Image
                src={me.avatar_url}
                alt=""
                width={0}
                height={0}
                unoptimized={true}
                onError={() => {
                  setUrlValid(false)
                }}
              ></Image> */}
              {!urlValid && (
                <div className="text-red-500 text-sm">Invalid URL</div>
              )}
            </div>
          </div>
          <Button type="submit">Update</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
