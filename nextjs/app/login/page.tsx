'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { login } from '@/lib/actions'
import { useFormState } from 'react-dom'
import Link from 'next/link'

const BE_URL = process.env.BE_URL
const CLIENT_ID = process.env.CLIENT_ID
const REDIRECT_URI = process.env.REDIRECT_URI

export default function Login() {
  const initialFormState: string[] = []
  const [formState, loginDispatch] = useFormState(login, initialFormState)
  function Errors() {
    if (formState === undefined) return
    return formState.map((message: string) => <p key={message}>{message}</p>)
  }

  return (
    <div className="flex max-w-md mx-auto pt-16 px-4">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-red-500 mb-4">
            <Errors />
          </div>
          <form action={loginDispatch} className="flex flex-col gap-4">
            <Input type="email" placeholder="Email" name="email" required />
            <Input
              type="password"
              placeholder="Password"
              name="password"
              required
            />
            <Button>Login</Button>
          </form>

          <Link
            className={
              buttonVariants({ variant: 'link', size: 'sm' }) + ' mt-2'
            }
            href="/sign_up"
          >
            Don&apos;t have an account? Sign up
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
