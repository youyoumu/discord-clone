'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { createChannel } from '@/lib/actions'

const formSchema = z.object({
  name: z.string().min(2).max(50)
})

export function NewChannelForm({
  serverId,
  setOpen
}: {
  serverId: string
  setOpen: any
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: ''
    }
  })
  const [channelName, setChannelName] = useState('')

  return (
    <Form {...form}>
      <form
        action={createChannel}
        className="space-y-8"
        onSubmit={() => {
          setChannelName('')
          setOpen(false)
        }}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Channel name</FormLabel>
              <FormControl>
                <Input
                  placeholder=""
                  {...field}
                  onChange={(e) => setChannelName(e.target.value)}
                  value={channelName}
                  maxLength={20}
                />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <input type="hidden" name="id" value={serverId} />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
