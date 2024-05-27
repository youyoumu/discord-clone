import Image from 'next/image'

export default function Page() {
  return (
    <div className="w-screen h-screen dark:bg-teal-900/20 flex items-center justify-center flex-col overflow-hidden">
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
  )
}
