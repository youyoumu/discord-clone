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
import { useFormState } from 'react-dom'
import Link from 'next/link'
import { signUp } from '@/lib/actions'

export default function Login() {
  const initialFormState: string[] = []
  const [formState, signUpDispatch] = useFormState(signUp, initialFormState)
  function Errors() {
    return formState.map((message: string) => <p key={message}>{message}</p>)
  }

  return (
    <div className="flex max-w-md mx-auto pt-16">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-red-500 mb-4">
            <Errors />
          </div>
          <form action={signUpDispatch} className="flex flex-col gap-4">
            <Input
              type="text"
              placeholder="Username"
              name="username"
              maxLength={20}
            />
            <Input type="email" placeholder="Email" name="email" />
            <Input type="password" placeholder="Password" name="password" />
            <Button>Login</Button>
          </form>

          <Link
            className={
              buttonVariants({ variant: 'link', size: 'sm' }) + ' mt-2'
            }
            href="/login"
          >
            have an account? Sign in
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
