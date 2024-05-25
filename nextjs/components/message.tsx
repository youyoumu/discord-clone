'use client'

import { Datetime } from './datetime'
import { Avatar } from './avatar'
import { DeleteMessageForm } from './delete-message-form'
import { useState } from 'react'

import { Textarea } from '@/components/ui/textarea'

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger
} from '@/components/ui/context-menu'

export function Message({
  message,
  serverId,
  channelId
}: {
  message: {
    user: {
      username: string
      avatar_url: string
      display_name: string
    }
    data: {
      id: string
      content: string
      created_at: string
    }
  }
  serverId: string
  channelId: string
}) {
  const name = message.user.display_name
    ? message.user.display_name
    : message.user.username

  const [editMode, setEditMode] = useState(false)
  function Content() {
    return (
      <p className="text-sm text-wrap break-words max-w-sm lg:max-w-xl xl:max-w-2xl 2xl:max-w-4xl">
        {message.data.content}
      </p>
    )
  }
  function ContentEdit() {
    return (
      <Textarea
        className="w-full text-sm text-wrap break-words max-w-sm lg:max-w-xl xl:max-w-2xl 2xl:max-w-4xl"
        defaultValue={message.data.content}
      />
    )
  }

  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <div className="flex gap-2 p-2 hover:bg-gray-100 grow">
          <Avatar url={message.user.avatar_url} />
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
        <ContextMenuItem>
          <div onClick={() => setEditMode(true)}>Edit Message</div>
        </ContextMenuItem>
        <ContextMenuItem>Copy Message</ContextMenuItem>
        <ContextMenuItem>
          {
            <DeleteMessageForm
              message={message}
              serverId={serverId}
              channelId={channelId}
            />
          }
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
