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

import { createServer } from '@/lib/actions'

const formSchema = z.object({
  name: z.string().min(2).max(50)
})

export function NewServerForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: ''
    }
  })
  const [serverName, setServerName] = useState('')

  return (
    <Form {...form}>
      <form
        action={createServer}
        className="space-y-8"
        onSubmit={() => setServerName('')}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Server name</FormLabel>
              <FormControl>
                <Input
                  placeholder=""
                  {...field}
                  onChange={(e) => setServerName(e.target.value)}
                  value={serverName}
                  maxLength={20}
                />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
