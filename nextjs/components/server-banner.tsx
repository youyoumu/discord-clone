export function ServerBanner({ serverName }: { serverName: string }) {
  return (
    <div className="w-full h-24 bg-zinc-900">
      <div className="p-2 text-background">{serverName}</div>
    </div>
  )
}
