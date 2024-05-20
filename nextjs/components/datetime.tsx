export function Datetime({ datetime }: { datetime: string }) {
  return (
    <time
      dateTime={datetime}
      className="text-xs text-slate-500 flex items-center"
    >
      {datetime}
    </time>
  )
}
