import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

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
            Click the button below to authorize this app to backend
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button className="w-full">
            <a
              href={`${BE_URL}/oauth/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}`}
            >
              login
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
