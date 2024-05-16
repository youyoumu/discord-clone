const BE_URL = process.env.BE_URL
const CLIENT_ID = process.env.CLIENT_ID
const REDIRECT_URI = process.env.REDIRECT_URI

export default function Login() {
  return (
    <a
      href={`${BE_URL}/oauth/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}`}
    >
      login
    </a>
  )
}
