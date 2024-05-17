'use client'

import { useSearchParams } from 'next/navigation'
import { getAccessToken } from './action'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

export default function DiscordClone() {
  const params = useSearchParams()
  const code = params.get('code') || ''

  return (
    <div className="flex max-w-md pt-16 mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Almost there</CardTitle>
          <CardDescription>
            Click the button below to get and save your access token in browser
            cookies
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={getAccessToken}>
            <input
              name="code"
              type="text"
              value={code as string}
              readOnly
              hidden
            />
            <Button className="w-full" type="submit">
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
