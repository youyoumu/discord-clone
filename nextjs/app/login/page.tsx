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

const BE_URL = process.env.BE_URL
const CLIENT_ID = process.env.CLIENT_ID
const REDIRECT_URI = process.env.REDIRECT_URI

export default function Login() {
  return (
    <div className="flex max-w-md mx-auto pt-16">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Oauth Login</CardTitle>
          <CardDescription>
            Click the button below to authorize this app to the backend
          </CardDescription>
        </CardHeader>
        <CardContent>
          <a
            className={`${buttonVariants()} w-full`}
            href={`${BE_URL}/oauth/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}`}
          >
            Login
          </a>
        </CardContent>
      </Card>
    </div>
  )
}
