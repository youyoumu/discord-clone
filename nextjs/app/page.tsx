import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="flex flex-col items-center min-h-32 bg-teal-600 w-full text-background dark:text-foreground">
        <div className="flex justify-between w-full max-w-2xl p-4 gap-4 items-end">
          <div className="flex gap-4 items-end">
            <Link href="https://github.com/youyoumu/discord-clone">
              <Image
                src="/github-mark-white.svg"
                alt=""
                width={40}
                height={40}
              />
            </Link>
            <Link
              href="https://discord.gg/theodinproject"
              className="font-semibold"
            >
              <Image
                src="/discord-mark-white.svg"
                alt=""
                width={40}
                height={40}
              />
            </Link>
            <Link
              href="https://www.theodinproject.com/lessons/react-new-messaging-app"
              className="font-semibold"
            >
              The Odin Project
            </Link>
          </div>
          <div className="flex gap-4">
            <Link href="/login" className="font-semibold">
              Sign In
            </Link>
            <Link href="/app" className="font-semibold">
              App
            </Link>
          </div>
        </div>
        <h1 className="text-6xl font-bold mb-12 mt-32">IMAGINE A PLACE...</h1>
        <p className="max-w-2xl mb-32">
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>
      </div>
      <div className="w-full h-full mt-40 mb-24 flex items-center justify-center flex-col overflow-hidden">
        <Image
          src="https://raw.githubusercontent.com/youyoumu/discord-clone/main/nextjs/public/rubyonrails.png"
          alt=""
          width={0}
          height={0}
          unoptimized={true}
          className="h-72 w-auto object-cover"
        ></Image>
        <Image
          src="https://raw.githubusercontent.com/youyoumu/discord-clone/main/nextjs/public/React.png"
          alt=""
          width={0}
          height={0}
          unoptimized={true}
          className="h-48 w-auto object-cover"
        ></Image>
      </div>
      <div className="w-full h-16 flex items-center justify-center bg-teal-900">
        <p className="text-center text-background dark:text-foreground">
          Made with 🗿 by{' '}
          <Link href="https://github.com/youyoumu" className="underline">
            youyoumu
          </Link>
        </p>
      </div>
    </div>
  )
}
