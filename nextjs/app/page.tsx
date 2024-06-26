import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="flex flex-col items-center min-h-32 bg-teal-600 w-full text-background dark:text-foreground">
        <div className="flex justify-between w-full max-w-2xl p-4 gap-4 items-end flex-col sm:flex-row">
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
        <h1 className="text-6xl font-bold mb-12 mt-32 px-6">
          ENVISION A REALM...
        </h1>
        <p className="max-w-2xl mb-32 px-6">
          ...a place where you can find your niche, whether it&apos;s in an
          academic club, a gaming circle, or a global community of artists. A
          space where you and a few close friends can share moments together. A
          platform that simplifies daily communication and encourages more
          frequent connections.
        </p>
      </div>
      <div className="w-full h-full mt-40 mb-24 flex items-center justify-center flex-col overflow-hidden">
        <Image
          src="https://raw.githubusercontent.com/youyoumu/discord-clone/main/nextjs/public/rubyonrails.png"
          alt=""
          width={0}
          height={0}
          unoptimized={true}
          className="h-72 w-auto object-cover p-4"
        ></Image>
        <Image
          src="https://raw.githubusercontent.com/youyoumu/discord-clone/main/nextjs/public/React.png"
          alt=""
          width={0}
          height={0}
          unoptimized={true}
          className="h-48 w-auto object-cover p-4"
        ></Image>
      </div>
      <div className="w-full h-16 flex items-center justify-center bg-teal-900 mt-auto">
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
