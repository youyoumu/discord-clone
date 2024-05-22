import Image from 'next/image'

interface Server {
  name: string
  icon_url?: string
}
export function ServerIcon({ server }: { server: Server }) {
  const name = server.name[0].toUpperCase()
  return <div className="text-4xl flex justify-center items-center">{name}</div>
}
