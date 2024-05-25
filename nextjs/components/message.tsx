'use client'

import { Datetime } from './datetime'
import { Avatar } from './avatar'
import { DeleteMessageForm } from './delete-message-form'
import { useState } from 'react'
import { Button } from './ui/button'
import { updateMessage } from '@/lib/actions'
import dayjs from 'dayjs'

import { Textarea } from '@/components/ui/textarea'

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger
} from '@/components/ui/context-menu'

import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'

export function Message({
  message,
  serverId,
  channelId,
  me
}: {
  message: {
    user: {
      id: string
      username: string
      avatar_url: string
      display_name: string
      bio: string
      created_at: string
    }
    data: {
      id: string
      content: string
      created_at: string
      edited: boolean
    }
  }
  serverId: string
  channelId: string
  me: {
    id: string
  }
}) {
  const name = message.user.display_name
    ? message.user.display_name
    : message.user.username
  const owned = message.user.id === me.id

  const createdAt = dayjs(message.data.created_at).format('DD/MM/YYYY')

  const [editMode, setEditMode] = useState(false)
  function Content() {
    return (
      <p className="text-sm text-wrap break-words max-w-sm lg:max-w-xl xl:max-w-2xl 2xl:max-w-4xl">
        {message.data.content}
        <span className="text-slate-500 text-xs">
          {message.data.edited && ' (edited)'}
        </span>
      </p>
    )
  }
  function ContentEdit() {
    return (
      <form
        action={updateMessage}
        className="flex flex-col gap-2 max-w-sm lg:max-w-xl xl:max-w-2xl 2xl:max-w-4xl"
        onSubmit={() => setEditMode(false)}
      >
        <Textarea
          className="w-full text-sm text-wrap break-words max-w-sm lg:max-w-xl xl:max-w-2xl 2xl:max-w-4xl"
          defaultValue={message.data.content}
          name="content"
        />
        <input type="hidden" name="messageId" value={message.data.id} />
        <input type="hidden" name="serverId" value={serverId} />
        <input type="hidden" name="channelId" value={channelId} />
        <Button className="w-20 self-end">Save</Button>
      </form>
    )
  }

  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <div className="flex gap-2 p-2 hover:bg-gray-100 grow rounded-sm">
          <Popover>
            <PopoverTrigger>
              <Avatar url={message.user.avatar_url} />
            </PopoverTrigger>
            <PopoverContent>
              <Avatar url={message.user.avatar_url} bigger={true} />
              <div className="text-md font-medium overflow-hidden p-2 mt-2 rounded-md">
                <div className="text-xl font-semibold">
                  {message.user.display_name
                    ? message.user.display_name
                    : message.user.username}
                </div>
                <div className="text-sm">
                  {message.user.display_name ? message.user.username : null}
                </div>
                <Separator className="my-2" />
                <div>About Me</div>
                <div className="text-sm text-slate-500">{message.user.bio}</div>
                <Separator className="my-2" />
                <div className="text-sm text-slate-700">{`Joined ${createdAt}`}</div>
              </div>
            </PopoverContent>
          </Popover>
          <div className="grow">
            <div className="flex gap-2 items-center">
              <div className="font-medium max-w-56 overflow-hidden">{name}</div>
              <Datetime datetime={message.data.created_at} />
            </div>
            {editMode ? <ContentEdit /> : <Content />}
          </div>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        {owned && (
          <ContextMenuItem>
            <div onClick={() => setEditMode(true)}>Edit Message</div>
          </ContextMenuItem>
        )}
        <ContextMenuItem>Copy Message</ContextMenuItem>
        {owned && (
          <ContextMenuItem>
            <DeleteMessageForm
              message={message}
              serverId={serverId}
              channelId={channelId}
            />
          </ContextMenuItem>
        )}
      </ContextMenuContent>
    </ContextMenu>
  )
}
